import React from 'react';
import {AppBar, Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import StyledToolbar from "@/components/styled/StyledToolbar";

interface AppBarProps {
}


const MovieMateAppBar = ({}: AppBarProps) => {
    const theme = useTheme()
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <AppBar position="static">
            <StyledToolbar sx={{padding: 2}}>
                <Typography
                    variant={isBelowMd ? "h5" : "h4"}
                    marginRight={2}>MovieMate
                </Typography>

                {/*TODO: ADD Search button*/}
            </StyledToolbar>
        </AppBar>
    );
};

export default MovieMateAppBar;