import {NextApiRequest, NextApiResponse} from "next";
import * as dataSource from "@/data/datasource/MovieDetailDataSource";
import {assertIsDefined} from "@/data/utils/Helpers";
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

class Vid {
    videos: Video[]

    constructor(videos: Video[]) {
        this.videos = videos
    }
}

class Img {
    images: Image[]

    constructor(images: Image[]) {
        this.images = images
    }
}

class Watch {
    watchProviders: WatchProvider[]

    constructor(watchProviders: WatchProvider[]) {
        this.watchProviders = watchProviders
    }
}

class Similar {
    movies: Movie[]

    constructor(movies: Movie[]) {
        this.movies = movies
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const movieId = req.query.id
        assertIsDefined(movieId)
        const id = parseInt(movieId as string)

        const detail = await dataSource.getMovieDetails(id)

        const videos = dataSource.getMovieVideos(id).then(res => new Vid(res))
        const images = dataSource.getMovieImages(id).then(res => new Img(res))
        const recommendations = dataSource.getMovieRecommendations(id).then(res => new Reco(res))

        const similar = dataSource.getSimilarMovies(id).then(res => new Similar(res))
        const watchProviders = dataSource.getWatchProviders(id).then(res => new Watch(res))


        const responses = await Promise.allSettled(
            [videos, images, recommendations, similar, watchProviders]
        )

        let videosData: Video[] | null = null
        let imagesData: Image[] | null = null
        let recoData: Movie[] | null = null
        let similarData: Movie[] | null = null
        let watchProvidersData: WatchProvider[] | null = null

        responses.filter(areFulfilled)
            .map(response => response.value)
            .forEach(response => {
                if (response instanceof Vid) videosData = response.videos
                else if (response instanceof Img) imagesData = response.images
                else if (response instanceof Reco) recoData = response.movies
                else if (response instanceof Similar) similarData = response.movies
                else if (response instanceof Watch) watchProvidersData = response.watchProviders
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
    } catch (e:any) {
        res.status(500).json({error: e.message})
    }
}