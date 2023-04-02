import Movie from "@/data/models/dto/Movie";
import Section from "@/data/models/local/Section";

export interface MovieSection {
    header: Section
    movies: Movie[]
}