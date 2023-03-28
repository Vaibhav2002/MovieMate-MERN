import {NextApiRequest, NextApiResponse} from "next";
import * as dataSource from "@/data/datasource/MovieDetailDataSource";
import {assertIsDefined} from "@/data/utils/AssertDefined";
import {areFulfilled} from "@/data/utils/PromiseFulfilled";
import Video from "@/data/models/dto/Video";
import {Image} from "@/data/models/dto/Image";
import Movie from "@/data/models/dto/Movie";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {DetailScreenData} from "@/uiDataHolders/DetailScreenData";

class Reco {
    movies: Movie[]

    constructor(movies: Movie[]) {
        this.movies = movies
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const movieId = req.query.id
    assertIsDefined(movieId)
    const id = parseInt(movieId as string)

    const detail = await dataSource.getMovieDetails(id)

    const videos = dataSource.getMovieVideos(id)
    const images = dataSource.getMovieImages(id)
    const recommendations = dataSource.getMovieRecommendations(id)
        .then(response => new Reco(response))

    const similar = dataSource.getSimilarMovies(id)
    const watchProviders = dataSource.getWatchProviders(id)


    const responses = await Promise.allSettled(
        [videos, images, recommendations, similar, watchProviders]
    )

    let videosData: Video[] | null = null
    let imagesData: Image[] | null = null
    let recoData: Movie[] | null = null
    let similarData: Movie[] | null  = null
    let watchProvidersData: WatchProvider[] | null = null

    responses.filter(areFulfilled)
        .map(response => response.value)
        .forEach(response => {
            if (response instanceof Array<Video>) videosData = response
            else if (response instanceof Array<Image>) imagesData = response
            else if (response instanceof Reco) recoData = response.movies
            else if (response instanceof Array<Movie>) similarData = response
            else if (response instanceof Array<WatchProvider>) watchProvidersData = response
        })

    const detailScreenData: DetailScreenData = {
        detail: detail,
        videos: videosData,
        backdrops: imagesData,
        recommendations: recoData,
        similarMovies: similarData,
        watchProviders: watchProvidersData
    }

    res.status(200).json(detailScreenData)

}