import React from 'react';
import {alpha, Box, Typography, useTheme} from "@mui/material";
import {Favorite, Star} from "@mui/icons-material";
import styles from "./RatingBadge.module.css"

interface RatingBadgeProps {
    rating: number
    className?: string
}

const RatingBadge = ({rating, className}: RatingBadgeProps) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                background: alpha(theme.palette.primary.light, 0.6),
            }}
            padding={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="4px"
            className={`${styles.ratingBadge} ${className}`}
        >
            <Star sx={{fontSize: 12}} />
            <Typography variant="caption">{rating}</Typography>
        </Box>
    )
}


export default RatingBadge;
