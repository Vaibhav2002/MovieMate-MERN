import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import movieMateTheme from "@/theme/MovieMateTheme";
import NextNProgress from 'nextjs-progressbar';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={movieMateTheme}>
            <NextNProgress/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
