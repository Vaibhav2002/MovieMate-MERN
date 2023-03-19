import {createTheme} from "@mui/system";
import colorPalette from "@/theme/ColorPalette";
import typography from "@/theme/Typography";

const movieMateTheme = createTheme({
    palette: colorPalette,
    typography: typography
});

export default movieMateTheme;
