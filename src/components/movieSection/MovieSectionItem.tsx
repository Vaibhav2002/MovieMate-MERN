import React from 'react';
import Section from "@/data/models/local/Section";
import {MovieSection} from "@/uiDataHolders/MovieSection";
import {Box, Button, Stack, Typography, TypographyPropsVariantOverrides} from "@mui/material";
import MovieItem from "@/components/movieItem/MovieItem";
import BackdropItem from "@/components/BackdropItem/BackdropItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";

interface MovieSectionItemProps {
    headerVariant?: OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>
    itemWidth?:string

    canSeeMore?:Boolean
    section: MovieSection
}


const MovieSectionItem = ({headerVariant, itemWidth, canSeeMore, section: {header, movies}}: MovieSectionItemProps) => {

    const isBackdropSection = header === Section.Trending

    const movieComponents = movies.map(movie => {
        if (isBackdropSection)
            return <BackdropItem key={movie.id} movie={movie}/>
        else
            return <MovieItem key={movie.id} width={itemWidth} movie={movie}/>
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
                <Typography variant={headerVariant ?? "h5"}>{header}</Typography>
                {canSeeMore && <Button variant="text">See More</Button>}
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


export default MovieSectionItem;
