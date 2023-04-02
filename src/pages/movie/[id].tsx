import {MovieDetail} from "@/data/models/dto/MovieDetail";
import Video from "@/data/models/dto/Video";
import Movie from "@/data/models/dto/Movie";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {GetServerSideProps} from "next";
import {BASE_URL} from "@/data/utils/Constants";
import {DetailScreenData} from "@/uiDataHolders/DetailScreenData";
import axios from "axios";
import {Image as ImageDto} from "@/data/models/dto/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackdropBackground from "@/components/screens/detailScreen/BackdropBackground";
import {Box, Stack} from "@mui/material";
import DetailSection from "@/components/screens/detailScreen/DetailSection";
import VideoSection from "@/components/screens/detailScreen/VideoSection";
import Section from "@/data/models/local/Section";
import React from "react";
import MovieSectionItem from "@/components/MovieSectionItem";
import {MovieSection} from "@/uiDataHolders/MovieSection";

export const getServerSideProps: GetServerSideProps<DetailScreenProps> = async ({params}) => {
    const id = params!.id
    const data = (await axios.get<DetailScreenData>(`${BASE_URL}/api/detail?id=${id}`)).data
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
    const isBackdropsNotNullOrEmpty = backdrops && backdrops.length > 0

    const notEmptyOrNull = (list: any[] | null) => list && list.length > 0

    const movieSection = (section: Section, movies: Movie[]) =>
        <MovieSectionItem
            headerVariant="h6"
            itemWidth="120px"
            canSeeMore={false}
            section={{header: section, movies: movies} as MovieSection}/>

    return (
        <main>
            <Box position="relative">
                {isBackdropsNotNullOrEmpty && <BackdropBackground title={detail.title} backdrops={backdrops}/>}

                <Box
                    width="100%"
                    padding="10%"
                    sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                    }}>

                    <Stack direction="column" height="100%" spacing={4}>

                        <DetailSection detail={detail} watchProviders={watchProviders}/>

                        {notEmptyOrNull(videos) && <VideoSection title={"Trailers and More"} videos={videos!}/>}

                        {notEmptyOrNull(recommendations) && movieSection(Section.Recommendations, recommendations!)}

                        {notEmptyOrNull(similarMovies) && movieSection(Section.Similar, similarMovies!)}

                    </Stack>

                </Box>



            </Box>
        </main>
    )

}

export default DetailScreen;