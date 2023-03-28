enum Genre {
    Action = "Action",
    Sports = "Sports",
    Comedy = "Comedy",

}

export const genreId = (genre: Genre) => {
    switch (genre) {
        case Genre.Action:
            return 1 //TODO: Add Actual Ids
        case Genre.Sports:
            return 2
        case Genre.Comedy:
            return 3
    }
}

export const genres = Object.values(Genre)

export default Genre