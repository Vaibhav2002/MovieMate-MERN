import Movie from "@/data/models/dto/Movie";

const imageBaseUrl = "https://image.tmdb.org/t/p"

const posterSizeLarge = "w500"
const posterSize = "w342"
const backdropSize = "w780"
const logoSize="w500"
const profileSize = "w185"
const bgBackdropSize = "original"

const getUrl = (path:string, size:string) => `${imageBaseUrl}/${size}${path}`

export const getPosterUrl = (file: string) => getUrl(file, posterSize)

export const getBackdropUrl = (file: string) => getUrl(file, backdropSize)

export const getLogoUrl = (file: string) => getUrl(file, logoSize)

export const getPosterUrlLarge = (file: string) => getUrl(file, posterSizeLarge)

export const backgroundBackdropUrl = (file: string) => getUrl(file, bgBackdropSize)

export const getProfileUrl = (file: string) => getUrl(file, profileSize)

export const addUrlToMovie = (movie: Movie) => ({
    ...movie,
    poster_path: getPosterUrl(movie.poster_path),
    backdrop_path: getBackdropUrl(movie.backdrop_path)
})
