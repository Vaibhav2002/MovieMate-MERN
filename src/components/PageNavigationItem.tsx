import {Box, Button, Typography} from "@mui/material";
import React from "react";

interface PageNavigationItemProps {
    page: number
    isLastPage: boolean
    isFirstPage: boolean
    onNextPage: () => void
    onPrevPage: () => void
}

const PageNavigationItem = ({page, isLastPage, isFirstPage, onNextPage, onPrevPage}: PageNavigationItemProps) => {

    return (
        <Box display="flex" justifyContent="space-between">
            <Button variant="text" disabled={isFirstPage} onClick={onPrevPage}>Prev</Button>
            <Typography variant="button">Page {page}</Typography>
            <Button variant="text" disabled={isLastPage} onClick={onNextPage}>Next</Button>
        </Box>
    )
}

export default PageNavigationItem;