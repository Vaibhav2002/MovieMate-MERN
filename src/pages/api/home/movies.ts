import * as datasource from "@/data/datasource/MoviesDataSource";
import {MovieSectionList} from "@/data/models/local/HomeData";
import {NextApiRequest, NextApiResponse} from "next";
import {isFulfilled} from "@/data/utils/PromiseFulfilled";
import MovieSection from "@/data/models/local/MovieSection";
import {addUrlToMovie} from "@/data/utils/ImageUrlHelper";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const trendingMovies = datasource.fetchTrendingMovies()
    const nowPlayingMovies = datasource.fetchNowPlayingMovies()
    const upcomingMovies = datasource.fetchUpcomingMovies()
    const latestMovies = datasource.fetchLatestMovies()
    const topRatedMovies = datasource.fetchTopRatedMovies()
    const popularMovies = datasource.fetchPopularMovies()


    const homeSections = [
        MovieSection.Trending,
        MovieSection.NowPlaying,
        MovieSection.Upcoming,
        MovieSection.Latest,
        MovieSection.TopRated,
        MovieSection.Popular
    ]

    const responses = await Promise.allSettled(
        [trendingMovies, nowPlayingMovies, upcomingMovies, latestMovies, topRatedMovies, popularMovies]
    )

    const movieList = responses.filter(isFulfilled)
        .map(response => response.value)
        .map((result, index): MovieSectionList => ({
            header: homeSections[index],
            movies: result.results ? result.results.map(addUrlToMovie) : []
        }))
        .map(list => (list.header === MovieSection.Trending)
            ? {...list, movies: list.movies.slice(0, 8)}
            : list)
        .filter(data => data.movies.length > 0)

    return res.status(200).json(movieList)
}