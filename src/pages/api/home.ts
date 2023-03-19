import * as datasource from "@/data/datasource/MoviesDataSource";
import {HomeData, MovieList} from "@/data/models/local/HomeData";
import {NextApiRequest, NextApiResponse} from "next";
import {isFulfilled} from "@/data/utils/PromiseFulfilled";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const trendingMovies = datasource.fetchTrendingMovies()
    const nowPlayingMovies = datasource.fetchNowPlayingMovies()
    const upcomingMovies = datasource.fetchUpcomingMovies()
    const latestMovies = datasource.fetchLatestMovies()
    const topRatedMovies = datasource.fetchTopRatedMovies()
    const popularMovies = datasource.fetchPopularMovies()

    const names = [
        "Trending movies",
        "Now Playing",
        "Upcoming",
        "Latest",
        "Top Rated ⭐️",
        "Popular"
    ]

    const responses = await Promise.allSettled(
        [trendingMovies, nowPlayingMovies, upcomingMovies, latestMovies, topRatedMovies, popularMovies]
    )

    const movieList = responses.filter(isFulfilled)
        .map(response => response.value)
        .map((result, index): MovieList => ({
            header: names.at(index)!,
            movies: result.results
        }))

    const homeData: HomeData = {data: movieList}

    return res.status(200).json(homeData)
}