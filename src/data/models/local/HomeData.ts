import {Movie} from "@/data/models/dto/movie/Movie";

export interface HomeData{
    data:MovieList[]
}

export interface MovieList{
    header:string

    movies:Movie[]
}