import api from "@/data/datasource/TMDBApiClient";
import {ShowResponse} from "@/data/models/dto/movie/Show";

const fetchShows = async (url: string): Promise<ShowResponse> => {
    const response = await api.get<ShowResponse>(url)
    return response.data
}

export const fetchAiringTodayShows = () => fetchShows('/tv/airing_today')

export const fetchOnTheAirShows = () => fetchShows('/tv/on_the_air')

export const fetchPopularShows = () => fetchShows("/tv/popular")

export const fetchLatestShows = () => fetchShows("tv/latest")

export const fetchTopRatedShows = () => fetchShows("tv/top_rated")