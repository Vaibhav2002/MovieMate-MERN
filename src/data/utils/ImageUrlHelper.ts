import Movie from "@/data/models/dto/movie/Movie";
import {Show} from "@/data/models/dto/movie/Show";

const imageBaseUrl = "https://image.tmdb.org/t/p"
const posterSize = "w500"
const backdropSize = "w780"

const getPosterUrl = (file: string) => `${imageBaseUrl}/${posterSize}${file}`
const getBackdropUrl = (file: string) => `${imageBaseUrl}/${backdropSize}${file}`

export const addUrlToMovie = (movie: Movie) => ({
    ...movie,
    poster_path: getPosterUrl(movie.poster_path),
    backdrop_path: getBackdropUrl(movie.backdrop_path)
})

export const addUrlToShow = (show: Show) => ({
    ...show,
    poster_path: getPosterUrl(show.poster_path),
    backdrop_path: show.backdrop_path ? getBackdropUrl(show.backdrop_path) : null
})