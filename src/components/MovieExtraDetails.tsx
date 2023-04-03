import {Stack, Typography} from "@mui/material";
import RectChip from "@/components/styled/RectChip";
import {roundTo2Decimals} from "@/data/utils/Helpers";
import {StarRounded} from "@mui/icons-material";
import React from "react";

interface MovieExtraDetailsProps {
    year: string;
    isAdult: boolean;
    rating: number;

    size?: "small" | "medium"
}

const MovieExtraDetails = ({year, isAdult, rating, size}:MovieExtraDetailsProps) => {
    const textSize = size === "small" ? "subtitle1" : "h6"
    const itemSize = size === "small" ? "small" : "medium"
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant={textSize}>{year}</Typography>
            {isAdult && <RectChip size={itemSize} variant="outlined" label="Adult" color="error"/>}
            <RectChip size={itemSize} label={roundTo2Decimals(rating)} color="warning"/>
        </Stack>
    )
}

export default MovieExtraDetails