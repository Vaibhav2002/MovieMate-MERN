enum Routes {
    HOME = "/home",

    MOVIE = "/movie",

    DISCOVER = "/discover",
    GENRE = "/genre",
}

export const getMovieRoute = (id: number) => `${Routes.MOVIE}/${id}`

export const getGenreRoute = (genre: number) => `${Routes.GENRE}/${genre}`

export default Routes