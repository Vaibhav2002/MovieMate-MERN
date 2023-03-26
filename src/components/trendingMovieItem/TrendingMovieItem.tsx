import React from 'react';
import Movie from "@/data/models/dto/movie/Movie";
import {Box} from "@mui/system";
import Image from "next/image";
import styles from "./TrendingMovieItem.module.css"
import MultilineText from "@/components/styled/MultilineText";
import {useMediaQuery, useTheme} from "@mui/material";

interface TrendingMovieItemProps {
    movie: Movie
    className?: string
}

const TrendingMovieItem = ({movie, className}: TrendingMovieItemProps) => {

    const theme = useTheme()
    const useSmallBreakpoint = useMediaQuery(theme.breakpoints.up("sm"))

    return (
        <Box
            className={`${className} ${styles.card}`}
            sx={{
                width: {xs: "100%", sm: "80%", md: "60%"}
            }}
        >
            <Image
                src={movie.backdrop_path}
                alt={movie.title}
                height={400}
                width={708}
                layout="responsive"
                style={{objectFit: "fill"}}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "60%",
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                }}
            />
            <Box
                padding={2}
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                }}
            >
                <MultilineText
                    maxLines={useSmallBreakpoint ? 2 : 1}
                    width={1}
                    variant="h4"
                >
                    {movie.title}
                </MultilineText>

                <MultilineText
                    maxLines={useSmallBreakpoint ? 3 : 2}
                    width={1}
                    variant="caption"
                    color="text.secondary"
                >
                    {movie.overview}
                </MultilineText>
            </Box>

        </Box>
    );
};


export default TrendingMovieItem;
