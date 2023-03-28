import React from 'react';
import {Box} from "@mui/system";
import Image from "next/image";
import styles from "./BackdropItem.module.css";
import MultilineText from "@/components/styled/MultilineText";
import {useMediaQuery, useTheme} from "@mui/material";
import BottomGradientBox from "@/components/styled/BottomGradientBox";
import Link from "next/link";
import {getMovieRoute} from "@/Routes";
import Movie from "@/data/models/dto/Movie";

interface BackdropItemProps {
    movie:Movie
    className?:string
}

const BackdropItem = ({movie, className}: BackdropItemProps) => {

    const theme = useTheme()
    const useSmallBreakpoint = useMediaQuery(theme.breakpoints.up("sm"))

    return (
        <Box
            sx={{
                width: {xs: "100%", sm: "80%", md: "55%"}
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
                    maxLines={useSmallBreakpoint ? 2 : 1}
                    width={1}
                    variant="h4"
                >
                    {movie.title}
                </MultilineText>

                <MultilineText
                    maxLines={useSmallBreakpoint ? 3 : 2}
                    width={1}
                    variant="body2"
                    color="text.secondary"
                >
                    {movie.overview}
                </MultilineText>
            </Box>

        </Box>
    );
};


export default BackdropItem;
