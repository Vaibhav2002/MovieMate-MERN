import {MovieDetail} from "@/data/models/dto/MovieDetail";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {Alert, Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";
import React from "react";
import componentStyles from "@/styles/components/components.module.css";
import MultilineText from "@/components/styled/MultilineText";
import WatchOnSection from "@/components/screens/detailScreen/WatchOnSection";
import Tilt from 'react-parallax-tilt';
import GenresSection from "@/components/screens/detailScreen/GenresSection";
import MovieExtraDetails from "@/components/MovieExtraDetails";

interface DetailSectionProps {

    detail: MovieDetail;
    watchProviders: WatchProvider[] | null;
}

const DetailSection = ({detail, watchProviders}: DetailSectionProps) => {

    const theme = useTheme()
    const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));
    const year = detail.release_date.split("-")[0]

    return (
        <Box
            display="flex"
            flex={1}
            sx={{flexDirection: {xs: "column", sm: "row"},}}
            alignItems="center"
            gap={6}
        >
            <Box
                sx={{width: {xs: "70%", sm: "50%", md: "30%"}}}
                className={componentStyles.posterCard}
            >
                <Tilt>
                    <Image
                        src={detail.poster_path}
                        alt={detail.title}
                        height={1000}
                        width={750}
                        loading='lazy'
                        layout="responsive"
                        style={{objectFit: "contain"}}
                    />
                </Tilt>
            </Box>

            <Stack direction="column" sx={{overflowX: "hidden"}} flex={1} spacing={2}>


                <MultilineText maxLines={2} variant={isBelowSm ? "h5" : "h2"}>
                    {detail.title}
                </MultilineText>

                {detail.tagline.length > 0 && <Alert severity="info" icon={false}>{detail.tagline}</Alert>}

                <MultilineText maxLines={5} variant="subtitle1">{detail.overview}</MultilineText>

                <MovieExtraDetails year={year} isAdult={detail.adult} rating={detail.vote_average}/>
                <GenresSection genres={detail.genres}/>

                {watchProviders && watchProviders.length > 0 && <WatchOnSection watchProviders={watchProviders}/>}
            </Stack>
        </Box>
    );
}


export default DetailSection;
