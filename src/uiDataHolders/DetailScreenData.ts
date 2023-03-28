import {MovieDetail} from "@/data/models/dto/MovieDetail";
import {Image} from "@/data/models/dto/Image";
import Movie from "@/data/models/dto/Movie";
import {WatchProvider} from "@/data/models/dto/WatchProvider";
import Video from "@/data/models/dto/Video";

export interface DetailScreenData {
    detail: MovieDetail

    backdrops: Image[] | null

    videos: Video[] | null

    similarMovies: Movie[] | null

    recommendations: Movie[] | null

    watchProviders: WatchProvider[] | null
}