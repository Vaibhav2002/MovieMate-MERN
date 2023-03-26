import * as datasource from "@/data/datasource/MoviesDataSource";
import {HomeData, MovieSectionList} from "@/data/models/local/HomeData";
import {NextApiRequest, NextApiResponse} from "next";
import {isFulfilled} from "@/data/utils/PromiseFulfilled";
import MovieSection, {movieSections} from "@/data/models/local/MovieSection";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const trendingMovies = datasource.fetchTrendingMovies()
    const nowPlayingMovies = datasource.fetchNowPlayingMovies()
    const upcomingMovies = datasource.fetchUpcomingMovies()
    const latestMovies = datasource.fetchLatestMovies()
    const topRatedMovies = datasource.fetchTopRatedMovies()
    const popularMovies = datasource.fetchPopularMovies()

    const names = movieSections

    const responses = await Promise.allSettled(
        [trendingMovies, nowPlayingMovies, upcomingMovies, latestMovies, topRatedMovies, popularMovies]
    )

    const imageBaseUrl = "https://image.tmdb.org/t/p"
    const posterSize = "w500"
    const backdropSize = "w780"

    const getPosterUrl = (file: string) => `${imageBaseUrl}/${posterSize}${file}`
    const getBackdropUrl = (file: string) => `${imageBaseUrl}/${backdropSize}${file}`

    const movieList = responses.filter(isFulfilled)
        .map(response => response.value)
        .map((result, index): MovieSectionList => ({
            header: names[index],
            movies: result.results ? result.results.map(movie => {
                return {
                    ...movie,
                    poster_path: getPosterUrl(movie.poster_path),
                    backdrop_path: getBackdropUrl(movie.backdrop_path)
                }
            }) : []
        }))
        .map(list => (list.header === MovieSection.Trending)
            ? {...list, movies: list.movies.slice(0, 8)}
            : list
        )
        .filter(data => data.movies.length > 0)

    const homeData: HomeData = {data: movieList}

    return res.status(200).json(homeData)
}