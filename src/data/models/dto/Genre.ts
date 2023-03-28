interface Genre {
    id: number;
    name: string;
}

export interface GenreResponse{
    genres: Genre[]
}

export default Genre