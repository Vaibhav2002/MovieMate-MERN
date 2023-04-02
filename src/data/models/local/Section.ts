import Movie from "@/data/models/dto/Movie";

enum Section {
    Trending = "Trending Movies",
    NowPlaying = "Now Playing",
    Upcoming = "Upcoming",
    Latest = "Latest",
    TopRated = "Top Rated",
    Popular = "Popular",

    Recommendations = "Recommendations",

    Similar = "Similar Movies",

}

export const nonMovieSpecificSections = [
    Section.Trending,
    Section.NowPlaying,
    Section.Upcoming,
    Section.Latest,
    Section.TopRated,
    Section.Popular,
]

export const allSection = Object.values(Section)

export default Section