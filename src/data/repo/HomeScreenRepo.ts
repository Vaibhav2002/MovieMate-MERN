import * as datasource from "@/data/datasource/MoviesDataSource";
import Section from "@/data/models/local/Section";
import {isFulfilled} from "@/data/utils/PromiseFulfilled";
import {MovieSection} from "@/uiDataHolders/MovieSection";
import {getGenres} from "@/data/datasource/CommonDataSource";
import HomeData from "@/uiDataHolders/HomeData";

export const getHomeScreenData = async () => {
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