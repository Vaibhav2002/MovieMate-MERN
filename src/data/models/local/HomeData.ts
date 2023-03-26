import Movie from "@/data/models/dto/movie/Movie";
import MovieSection from "@/data/models/local/MovieSection";

export interface HomeData {
    data: MovieSectionList[]
}

export interface MovieSectionList {
    header: MovieSection
    movies: Movie[]
}