import Genre from "@/data/models/dto/Genre";

export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    overview: string;
    popularity: number;
    poster_path: null;
    release_date: Date;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}