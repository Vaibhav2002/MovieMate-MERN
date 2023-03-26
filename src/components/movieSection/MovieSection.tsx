import React from 'react';
import Section from "@/data/models/local/MovieSection";
import {MovieSectionList} from "@/data/models/local/HomeData";
import {Box, Button, Stack, Typography} from "@mui/material";
import MovieItem from "@/components/movieItem/MovieItem";
import TrendingMovieItem from "@/components/trendingMovieItem/TrendingMovieItem";
import styles from "./MovieSection.module.css"

interface MovieSectionProps {
    section: MovieSectionList
}


const MovieSection = ({section: {header, movies}}: MovieSectionProps) => {

    const movieComponents = movies.map(movie => {
        if (header === Section.Trending)
            return <TrendingMovieItem key={movie.id} movie={movie}/>
        else
            return <MovieItem key={movie.id} movie={movie}/>
    })

    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                alignItems="center"
            >
                <Typography variant="h5">{header}</Typography>
                <Button variant="text">See More</Button>
            </Box>

            <Stack
                direction="row"
                marginTop={2}
                spacing={2}
                style={{overflowX: "auto"}}
            >{movieComponents}</Stack>
        </Box>
    );
};


export default MovieSection;
