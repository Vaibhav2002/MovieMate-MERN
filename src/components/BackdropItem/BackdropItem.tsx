import React from 'react';
import {Box} from "@mui/system";
import Image from "next/image";
import styles from "./BackdropItem.module.css";
import MultilineText from "@/components/styled/MultilineText";
import {Theme, useMediaQuery, useTheme} from "@mui/material";
import BottomGradientBox from "@/components/styled/BottomGradientBox";
import Link from "next/link";
import {getMovieRoute} from "@/Routes";
import Movie from "@/data/models/dto/Movie";
import MovieExtraDetails from "@/components/MovieExtraDetails";

interface BackdropItemProps {
    movie:Movie
    className?:string
}

const BackdropItem = ({movie, className}: BackdropItemProps) => {

    const isBelowSm = useMediaQuery((theme:Theme) => theme.breakpoints.down("sm"))
    const year = movie.release_date.split("-")[0]
    const titleSize = isBelowSm ? "h6" : "h4"
    const bodySize = isBelowSm ? "caption" : "body2"

    return (
        <Box
            sx={{
                width: {xs: "100%", sm: "80%", md: "65%"}
            }}
            className={`${className} ${styles.backdropCard}`}
            component={Link}
            href={getMovieRoute(movie.id)}
        >
            <Image
                src={movie.backdrop_path}
                alt={movie.title}
                height={400}
                width={708}
                layout="responsive"
                style={{objectFit: "fill"}}
            />
            <BottomGradientBox height = "80%"/>

            <Box
                padding={2}
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                }}
            >
                <MultilineText
                    maxLines={isBelowSm ? 2 : 1}
                    width={1}
                    variant={titleSize}
                >
                    {movie.title}
                </MultilineText>

                <MultilineText
                    maxLines={isBelowSm ? 3 : 2}
                    width={1}
                    variant={bodySize}
                    color="text.secondary"
                    marginBottom={isBelowSm ? 0 : 2}
                >
                    {movie.overview}
                </MultilineText>

                {!isBelowSm && <MovieExtraDetails size="small" year={year} isAdult={movie.adult} rating={movie.vote_average}/>}
            </Box>

        </Box>
    );
};


export default BackdropItem;
