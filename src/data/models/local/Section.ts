import Movie from "@/data/models/dto/Movie";

enum Section {
    Trending = "Trending movies",
    NowPlaying = "Now Playing",
    Upcoming = "Upcoming",
    Latest = "Latest",
    TopRated = "Top Rated",
    Popular = "Popular",

    Recommendations = "Recommendations",

    Similar = "Similar Movies",

}

export const allSection = Object.values(Section)

export default Section