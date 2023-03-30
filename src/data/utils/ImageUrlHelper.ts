import Movie from "@/data/models/dto/Movie";

const imageBaseUrl = "https://image.tmdb.org/t/p"
const posterSize = "w780"
const backdropSize = "w780"
const logoSize="w500"

export const getPosterUrl = (file: string) => `${imageBaseUrl}/${posterSize}${file}`
export const getBackdropUrl = (file: string) => `${imageBaseUrl}/${backdropSize}${file}`

export const getLogoUrl = (file: string) => `${imageBaseUrl}/${logoSize}${file}`

export const backgroundBackdropUrl = (file: string) => `${imageBaseUrl}/original${file}`

export const addUrlToMovie = (movie: Movie) => ({
    ...movie,
    poster_path: getPosterUrl(movie.poster_path),
    backdrop_path: getBackdropUrl(movie.backdrop_path)
})
