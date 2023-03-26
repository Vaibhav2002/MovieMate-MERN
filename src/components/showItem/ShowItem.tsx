import React from 'react';
import {Box} from "@mui/system";
import Image from "next/image";
import componentStyles from "@/styles/components/components.module.css";
import RatingBadge from "@/components/ratingBadge/RatingBadge";
import {Show} from "@/data/models/dto/movie/Show";

interface ShowItemProps {
    show: Show
    className?: string
}

const ShowItem = ({show, className}: ShowItemProps) => {
    return (
        <Box
            className={`${componentStyles.posterCard} ${className}`}
            position="relative"
        >
            <Image
                src={show.poster_path}
                alt={show.name}
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
                <RatingBadge rating={show.vote_average}/>
            </Box>
            {/*TODO: Add Country card and move rating to bottom*/}
        </Box>
    );
};


export default ShowItem;
