import Movie from "@/data/models/dto/movie/Movie";

enum Section {
    Trending = "Trending movies",
    NowPlaying = "Now Playing",
    Upcoming = "Upcoming",
    Latest = "Latest",
    TopRated = "Top Rated",
    Popular = "Popular"
}

export const allSection = Object.values(Section)

export default Section