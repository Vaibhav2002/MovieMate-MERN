import {PaletteOptions} from "@mui/material";

const colorPalette:PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#D32F2F', // red
        dark: '#9A0007',
        light: '#FF6659',
    },
    secondary: {
        main: '#FF9800', // orange
        dark: '#C66900',
        light: '#FFB74D',
    },
    success: {
        main: '#4CAF50', // green
        dark: '#087f23',
        light: '#80e27e',
    },
    error: {
        main: '#f44336', // red
        dark: '#ba000d',
        light: '#ff7961',
    },
    warning: {
        main: '#FFC107', // amber
        dark: '#ff8f00',
        light: '#ffd54f',
    },
    info: {
        main: '#2196F3', // blue
        dark: '#0069c0',
        light: '#64b5f6',
    },
    background: {
        paper: '#1E1E1E', // dark gray
        default: '#121212', // black
    },
    text: {
        primary: '#FFFFFF', // white
        secondary: '#BDBDBD', // light gray
        disabled: '#757575', // gray
    },
}

export default colorPalette