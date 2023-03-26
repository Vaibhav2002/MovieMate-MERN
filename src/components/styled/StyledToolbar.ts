import {styled, Toolbar} from "@mui/material";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    disableGutters: true,
    background: theme.palette.background.default,
    color: theme.palette.text.primary
}))

export default StyledToolbar