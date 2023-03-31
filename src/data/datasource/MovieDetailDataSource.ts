import api from "@/data/datasource/TMDBApiClient";
import {MovieDetail} from "@/data/models/dto/MovieDetail";
import {VideoResponse} from "@/data/models/dto/Video";
import {ImageResponse} from "@/data/models/dto/Image";
import {MoviesResponse} from "@/data/models/dto/Movie";
import {WatchProviderResponse} from "@/data/models/dto/WatchProvider";
import {
    addUrlToMovie,
    backgroundBackdropUrl,
    getBackdropUrl,
    getLogoUrl,
    getPosterUrl, getPosterUrlLarge
} from "@/data/utils/ImageUrlHelper";

const getMovieInfo = async <T>(id: number, url: string): Promise<T> => {
    const response = await api.get<T>(`movie/${id}${url}`)
    return response.data
};

export const getMovieDetails = (id: number) => getMovieInfo<MovieDetail>(id, '')
    .then(response => ({
        ...response,
        backdrop_path: getBackdropUrl(response.backdrop_path),
        poster_path: getPosterUrlLarge(response.poster_path)
    }))

export const getMovieVideos = (id: number) => getMovieInfo<VideoResponse>(id, `/videos`)
    .then(response => response.results)
    .then(response => response.filter(video => video.site === 'YouTube'))

export const getMovieImages = (id: number) => getMovieInfo<ImageResponse>(id, `/images`)
    .then(response => response.backdrops)
    .then(response => response.map(image => ({
        ...image,
        file_path: backgroundBackdropUrl(image.file_path)
    })))

export const getMovieRecommendations = (id: number) => getMovieInfo<MoviesResponse>(id, `/recommendations`)
    .then(response => response.results)
    .then(response => response.map(addUrlToMovie))

export const getSimilarMovies = (id: number) => getMovieInfo<MoviesResponse>(id, `/similar`)
    .then(response => response.results)
    .then(response => response.map(addUrlToMovie))

export const getWatchProviders = (id: number) => getMovieInfo<WatchProviderResponse>(id, `/watch/providers`)
    .then(response => response.results.IN)
    .then(providers => providers.flatrate.concat(providers.buy).concat(providers.rent))
    .then(providers => providers.sort((a, b) => a.display_priority - b.display_priority))
    .then(providers => providers.filter((provider, index, self) =>
        index === self.findIndex((p) => p.provider_id === provider.provider_id)
    ))
    .then(response => response.slice(0, 6))
    .then(response => response.map(provider => ({
        ...provider,
        logo_path: getLogoUrl(provider.logo_path)
    })))