import {MoviesResponse} from "@/data/models/dto/Movie";
import api from "@/data/datasource/TMDBApiClient";

const fetchMovies = async (url:string):Promise<MoviesResponse> => {
    const response = await api.get<MoviesResponse>(url)
    return response.data
}

export const fetchTrendingMovies = () => fetchMovies('/trending/movie/week')

export const fetchPopularMovies = () => fetchMovies('/movie/popular')

export const fetchLatestMovies = () => fetchMovies("/movie/latest")

export const fetchTopRatedMovies = () => fetchMovies("movie/top_rated")

export const fetchNowPlayingMovies = () => fetchMovies("movie/now_playing")

export const fetchUpcomingMovies = () => fetchMovies("movie/upcoming")
