import {MoviesResponse} from "@/data/models/dto/Movie";
import api from "@/data/datasource/TMDBApiClient";
import {addUrlToMovie} from "@/data/utils/ImageUrlHelper";

const fetchMovies = async (url:string, pageNo:string):Promise<MoviesResponse> => {
    const response = await api.get<MoviesResponse>(url, {
        params: {
            page: pageNo
        }
    })
    return response.data
}

const addUrlToMovies = (response:MoviesResponse) => ({
    ...response,
    results: response.results.map(addUrlToMovie)
})

export const fetchTrendingMovies = (pageNo:string = "1") => fetchMovies('/trending/movie/week', pageNo)
    .then(addUrlToMovies)

export const fetchPopularMovies = (pageNo:string = "1") => fetchMovies('/movie/popular', pageNo)
    .then(addUrlToMovies)

export const fetchLatestMovies = (pageNo:string = "1") => fetchMovies("/movie/latest", pageNo)
    .then(addUrlToMovies)

export const fetchTopRatedMovies = (pageNo:string = "1") => fetchMovies("movie/top_rated", pageNo)
    .then(addUrlToMovies)

export const fetchNowPlayingMovies = (pageNo:string = "1") => fetchMovies("movie/now_playing", pageNo)
    .then(addUrlToMovies)

export const fetchUpcomingMovies = (pageNo:string = "1") => fetchMovies("movie/upcoming", pageNo)
    .then(addUrlToMovies)
