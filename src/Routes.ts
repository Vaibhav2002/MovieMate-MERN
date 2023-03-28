enum Routes {
    HOME = "/home",
    DISCOVER = "/discover",
    GENRE = "/genre",
}

export const getGenreRoute = (genre: number) => `${Routes.GENRE}/${genre}`

export default Routes