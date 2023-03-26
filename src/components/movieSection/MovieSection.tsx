import React from 'react';
import Section from "@/data/models/local/MovieSection";
import {MovieSectionList} from "@/data/models/local/HomeData";
import {Box, Button, Stack, Typography} from "@mui/material";
import MovieItem from "@/components/movieItem/MovieItem";
import BackdropItem from "@/components/BackdropItem/BackdropItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface MovieSectionProps {
    section: MovieSectionList
}


const MovieSection = ({section: {header, movies}}: MovieSectionProps) => {

    const isBackdropSection = header === Section.Trending

    const movieComponents = movies.map(movie => {
        if (isBackdropSection)
            return <BackdropItem
                title={movie.title}
                backdrop={movie.backdrop_path}
                overview={movie.overview}
                key={movie.id}
            />
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

            {/*<Carousel*/}
            {/*    emulateTouch={true}*/}
            {/*    centerMode={isBackdropSection}*/}
            {/*    autoPlay={isBackdropSection}*/}
            {/*    infiniteLoop={isBackdropSection}*/}
            {/*    centerSlidePercentage={60}*/}
            {/*>{movieComponents}</Carousel>*/}

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
