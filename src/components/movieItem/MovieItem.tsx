import React from 'react';
import Movie from "@/data/models/dto/movie/Movie";
import {Box} from "@mui/system";
import Image from "next/image";
import RatingBadge from "@/components/ratingBadge/RatingBadge";
import componentStyles from "@/styles/components/components.module.css";

interface MovieItemProps {
    movie: Movie
    className?: string
}

const MovieItem = ({movie, className}: MovieItemProps) => {
    return (
        <Box
            className={`${componentStyles.posterCard} ${className}`}
            position="relative"
        >
            <Image
                src={movie.poster_path}
                alt={movie.title}
                height={233}
                width={175}
                layout="responsive"
                style={{objectFit: "cover"}}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}>
                <RatingBadge rating={movie.vote_average}/>
            </Box>

        </Box>
    );
};


export default MovieItem;
