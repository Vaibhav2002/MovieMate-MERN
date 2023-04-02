import React from 'react';
import Movie from "@/data/models/dto/Movie";
import {Box} from "@mui/system";
import Image from "next/image";
import componentStyles from "@/styles/components/components.module.css";
import Link from "next/link";
import {getMovieRoute} from "@/Routes";
import {roundTo2Decimals} from "@/data/utils/Helpers";
import {StarRounded} from "@mui/icons-material";
import RectChip from "@/components/styled/RectChip";

interface MovieItemProps {
    width?: string
    movie: Movie
    className?: string
}

const MovieItem = ({width, movie, className}: MovieItemProps) => {
    return (
        <Box
            width={width ?? "175px"}
            className={`${componentStyles.posterCard} ${className}`}
            position="relative"
            component={Link}
            href={getMovieRoute(movie.id)}
        >
            <Image
                src={movie.poster_path}
                alt={movie.title}
                height={233}
                width={175}
                loading='lazy'
                layout="responsive"
                style={{objectFit: "cover"}}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}>
                <RectChip
                    label={roundTo2Decimals(movie.vote_average)}
                    color="secondary"
                    size="small"
                    icon={<StarRounded/>}
                />
            </Box>

        </Box>
    );
};


export default MovieItem;
