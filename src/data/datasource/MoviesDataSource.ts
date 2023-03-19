import {MoviesResponse} from "@/data/models/dto/movie/Movie";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_TMDB_API_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/'

const api = axios.create({baseURL: TMDB_BASE_URL})
api.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        api_key: API_KEY
    };
    return config;
});

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
