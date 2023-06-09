import * as datasource from "@/data/datasource/MoviesDataSource";
import {MovieSection} from "@/uiDataHolders/MovieSection";
import {NextApiRequest, NextApiResponse} from "next";
import {isFulfilled} from "@/data/utils/PromiseFulfilled";
import Section from "@/data/models/local/Section";
import {getGenres} from "@/data/datasource/CommonDataSource";
import HomeData from "@/uiDataHolders/HomeData";

export const fetchHomeData = async () => {
    const trendingMovies = datasource.fetchTrendingMovies()
    const nowPlayingMovies = datasource.fetchNowPlayingMovies()
    const upcomingMovies = datasource.fetchUpcomingMovies()
    const topRatedMovies = datasource.fetchTopRatedMovies()
    const popularMovies = datasource.fetchPopularMovies()

    const sections = [
        Section.Trending,
        Section.NowPlaying,
        Section.Upcoming,
        Section.TopRated,
        Section.Popular
    ]

    const responses = await Promise.allSettled(
        [trendingMovies, nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies]
    )

    const movieList = responses.filter(isFulfilled)
        .map(response => response.value)
        .map((result, index): MovieSection => ({
            header: sections[index],
            movies: result.results
        }))
        .map(list => (list.header === Section.Trending)
            ? {...list, movies: list.movies.slice(0, 8)}
            : list)
        .filter(data => data.movies.length > 0)


    const genres = (await getGenres()).slice(0, 10)

    return {
        genres: genres,
        sections: movieList
    } as HomeData
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const homeData:HomeData = await fetchHomeData()
    return res.status(200).json(homeData)
}