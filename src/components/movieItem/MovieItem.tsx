import React from 'react';
import Movie from "@/data/models/dto/movie/Movie";
import {Box} from "@mui/system";
import Image from "next/image";
import styles from "./MovieItem.module.css"
import RatingBadge from "@/components/ratingBadge/RatingBadge";

interface MovieItemProps {
    movie: Movie
    className?: string
}

const MovieItem = ({movie, className}: MovieItemProps) => {
    return (
        <Box className={`${styles.card} ${className}`}>
            <Image
                src={movie.poster_path}
                alt={movie.title}
                height={200}
                width={150}
                layout="responsive"
                style={{objectFit: "cover"}}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}>
                <RatingBadge rating={4.5}/>
            </Box>

        </Box>
    );
};


export default MovieItem;
