import Movie from "@/data/models/dto/Movie";
import Section from "@/data/models/local/Section";
import ShowSection from "@/data/models/local/ShowSection";
import {Show} from "@/data/models/dto/Show";

export interface MovieSection {
    header: Section
    movies: Movie[]
}