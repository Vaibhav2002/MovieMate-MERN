import {MovieDetail} from "@/data/models/dto/MovieDetail";
import {Image} from "@/data/models/dto/Image";
import Video from "@/data/models/dto/Video";
import Movie from "@/data/models/dto/Movie";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {Typography} from "@mui/material";
import {GetServerSideProps} from "next";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import {DetailScreenData} from "@/uiDataHolders/DetailScreenData";
import axios from "axios";

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
    backdrops?: Image[] | null
    videos?: Video[] | null
    similarMovies?: Movie[] | null
    recommendations?: Movie[] | null
    watchProviders?: WatchProvider[] | null
}

const DetailScreen = (
    props: DetailScreenProps
) => {

    return (
        <main>
            <Typography>{JSON.stringify(props)}</Typography>
        </main>
    )

}

export default DetailScreen;