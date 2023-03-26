import React from 'react';
import {AppBar, Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import StyledToolbar from "@/components/styled/StyledToolbar";
import {Page} from "@/pages/home/[content]";

interface HomeAppBarProps {
    pages: Page[]
    onPageClick: (page: Page) => void
}


const HomeAppBar = ({pages, onPageClick}: HomeAppBarProps) => {
    const theme = useTheme()
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <AppBar position="static">
            <StyledToolbar sx={{padding: 2}}>
                <Typography
                    variant={ isBelowMd ? "h5" : "h4" }
                    marginRight={2}>MovieMate
                </Typography>
                {pages.map(page =>
                    <Button
                        key={page}
                        sx={{marginRight: 2}}
                        color="inherit"
                        onClick={() => onPageClick(page)}
                    >
                        {page}
                    </Button>
                )}

            </StyledToolbar>
        </AppBar>
    );
};

export default HomeAppBar;
