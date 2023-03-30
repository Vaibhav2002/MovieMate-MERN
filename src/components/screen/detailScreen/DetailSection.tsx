import {MovieDetail} from "@/data/models/dto/MovieDetail";
import Movie from "@/data/models/dto/Movie";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {Alert, Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";
import React from "react";
import componentStyles from "@/styles/components/components.module.css";
import MultilineText from "@/components/styled/MultilineText";
import WatchOnSection from "@/components/screen/detailScreen/WatchOnSection";
import MovieSectionItem from "@/components/movieSection/MovieSectionItem";
import {MovieSection} from "@/uiDataHolders/MovieSection";
import Section from "@/data/models/local/Section";

interface DetailSectionProps {

    detail: MovieDetail;
    watchProviders: WatchProvider[] | null;
    similarMovies: Movie[] | null;
    recommendations: Movie[] | null;
}

const DetailSection = ({detail, watchProviders, similarMovies, recommendations}: DetailSectionProps) => {

    const theme = useTheme()
    const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));

    const notEmptyOrNull = (list: any[] | null) => list && list.length > 0


    return (
        <Stack direction="column" height="100%" spacing={4} paddingBottom={4}>
            <Box
                display="flex"
                flex={1}
                sx={{
                    flexDirection: {xs: "column", sm: "row"},
                }}
                alignItems="center"
                gap={6}
            >
                <Box
                    sx={{width: {xs: "70%", sm: "50%", md: "30%"}}}
                    className={componentStyles.posterCard}>
                    <Image
                        src={detail.poster_path}
                        alt={detail.title}
                        height={1000}
                        width={750}
                        loading='lazy'
                        layout="responsive"
                        style={{objectFit: "cover"}}
                    />
                </Box>
                <Stack direction="column" sx={{overflowX: "hidden"}} flex={1} spacing={2}>
                    <MultilineText
                        maxLines={2}
                        variant={isBelowSm ? "h5" : "h2"}
                    >
                        {detail.title}
                    </MultilineText>
                    <Alert severity="info" icon={false}>{detail.tagline}</Alert>
                    <MultilineText maxLines={5} variant="subtitle1">{detail.overview}</MultilineText>
                    {watchProviders && watchProviders.length > 0 && <WatchOnSection watchProviders={watchProviders}/>}
                </Stack>
            </Box>


            {/*TODO: Add Video Section*/}
            {notEmptyOrNull(recommendations) && <MovieSectionItem
                headerVariant="h6"
                itemWidth="120px"
                section={{
                    header: Section.Recommendations,
                    movies: recommendations
                } as MovieSection}/>}

            {notEmptyOrNull(similarMovies) && <MovieSectionItem
                headerVariant="h6"
                itemWidth="120px"
                section={{
                    header: Section.Similar,
                    movies: similarMovies
                } as MovieSection}/>}

        </Stack>
    );
}


export default DetailSection;
