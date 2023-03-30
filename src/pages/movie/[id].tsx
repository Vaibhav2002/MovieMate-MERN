import {MovieDetail} from "@/data/models/dto/MovieDetail";
import Video from "@/data/models/dto/Video";
import Movie from "@/data/models/dto/Movie";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {GetServerSideProps} from "next";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import {DetailScreenData} from "@/uiDataHolders/DetailScreenData";
import axios from "axios";
import {Image as ImageDto} from "@/data/models/dto/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackdropBackground from "@/components/screen/detailScreen/BackdropBackground";
import {Box} from "@mui/material";
import DetailSection from "@/components/screen/detailScreen/DetailSection";

export const getServerSideProps: GetServerSideProps<DetailScreenProps> = async ({params}) => {
    const id = params!.id
    const data = (await axios.get<DetailScreenData>(`${getBaseUrl()}/api/movie?id=${id}`)).data
    return {
        props: {
            detail: data.detail,
            backdrops: data.backdrops,
            videos: data.videos,
            similarMovies: data.similarMovies,
            recommendations: data.recommendations,
            watchProviders: data.watchProviders
        }
    }
}

interface DetailScreenProps {
    detail: MovieDetail
    backdrops: ImageDto[] | null
    videos: Video[] | null
    similarMovies: Movie[] | null
    recommendations: Movie[] | null
    watchProviders: WatchProvider[] | null
}

const DetailScreen = (
    {detail, backdrops, videos, similarMovies, recommendations, watchProviders}: DetailScreenProps
) => {


    console.log(backdrops?.at(0)?.height + " " + backdrops?.at(0)?.width)
    return (
        <main>
            <Box position="relative" height="100vh">
                {backdrops && <BackdropBackground title={detail.title} backdrops={backdrops}/>}

                <Box
                    width={0.8}
                    height={1}
                    marginTop="10%"
                    marginBottom="20%"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <DetailSection
                        detail={detail}
                        watchProviders={watchProviders}
                        similarMovies={similarMovies}
                        recommendations={recommendations}/>

                </Box>

            </Box>
        </main>
    )

}

export default DetailScreen;