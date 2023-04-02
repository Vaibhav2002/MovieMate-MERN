import {MoviesResponse} from "@/data/models/dto/Movie";
import api from "@/data/datasource/TMDBApiClient";
import {addUrlToMovie} from "@/data/utils/ImageUrlHelper";
import {AxiosRequestConfig} from "axios";

const fetchMovies = async (url: string, page: number): Promise<MoviesResponse> => {
    const response = await api.get<MoviesResponse>(url, {
        params: { page: page }
    })
    return response.data
}

const addUrlToMovies = (response: MoviesResponse) => ({
    ...response,
    results: response.results.map(addUrlToMovie)
})

const fetchTrendingMovies = (page: number = 1): Promise<MoviesResponse> => fetchMovies('/trending/movie/week', page)
    .then(addUrlToMovies)

const fetchPopularMovies = (page: number = 1): Promise<MoviesResponse> => fetchMovies('/movie/popular', page)
    .then(addUrlToMovies)

const fetchTopRatedMovies = (page: number = 1): Promise<MoviesResponse> => fetchMovies("movie/top_rated", page)
    .then(addUrlToMovies)

const fetchNowPlayingMovies = (page: number = 1): Promise<MoviesResponse> => fetchMovies("movie/now_playing", page)
    .then(addUrlToMovies)

const fetchUpcomingMovies = (page: number = 1): Promise<MoviesResponse> => fetchMovies("movie/upcoming", page)
    .then(addUrlToMovies)

const fetchMoviesByGenre = (id: number, page: number = 1): Promise<MoviesResponse> => fetchMovies(`/discover/movie?with_genres=${id}`, page)
    .then(addUrlToMovies)

export {
    fetchTrendingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchUpcomingMovies,
    fetchMoviesByGenre
}