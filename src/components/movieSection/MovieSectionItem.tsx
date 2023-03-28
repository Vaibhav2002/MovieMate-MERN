import React from 'react';
import Section from "@/data/models/local/Section";
import {MovieSection} from "@/uiDataHolders/MovieSection";
import {Box, Button, Stack, Typography} from "@mui/material";
import MovieItem from "@/components/movieItem/MovieItem";
import BackdropItem from "@/components/BackdropItem/BackdropItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';

interface MovieSectionItemProps {
    section: MovieSection
}


const MovieSectionItem = ({section: {header, movies}}: MovieSectionItemProps) => {

    const isBackdropSection = header === Section.Trending

    const movieComponents = movies.map(movie => {
        if (isBackdropSection)
            return <BackdropItem key={movie.id} movie={movie}/>
        else
            return <MovieItem key={movie.id} movie={movie}/>
    })

    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                paddingRight={2}
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


export default MovieSectionItem;
