import Movie from "@/data/models/dto/movie/Movie";
import MovieSection from "@/data/models/local/MovieSection";
import ShowSection from "@/data/models/local/ShowSection";
import {Show} from "@/data/models/dto/movie/Show";

export interface MovieSectionList {
    header: MovieSection
    movies: Movie[]
}

export interface ShowSectionList {
    header: ShowSection
    shows: Show[]
}