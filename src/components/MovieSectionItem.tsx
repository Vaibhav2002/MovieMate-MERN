import React from 'react';
import Section from "@/data/models/local/Section";
import {MovieSection} from "@/uiDataHolders/MovieSection";
import {TypographyPropsVariantOverrides} from "@mui/material";
import MovieItem from "@/components/MovieItem";
import BackdropItem from "@/components/BackdropItem/BackdropItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {getSectionRoute} from "@/Routes";
import ScrollableSection from "@/components/ScrollableSection";

interface MovieSectionItemProps {
    headerVariant?: OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>
    itemWidth?: string
    canSeeMore?: Boolean
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
        <ScrollableSection
            header={header}
            headerVariant={headerVariant ?? "h5"}
            headerHref={getSectionRoute(header)}
            canSeeMore={canSeeMore}
        >
            {movieComponents}
        </ScrollableSection>
    );
};


export default MovieSectionItem;
