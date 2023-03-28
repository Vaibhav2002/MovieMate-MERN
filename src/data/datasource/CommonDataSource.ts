import api from "@/data/datasource/TMDBApiClient";
import Genre, {GenreResponse} from "@/data/models/dto/Genre";

export const getGenres = async (): Promise<Genre[]> => {
    const response = await api.get<GenreResponse>(`/genre/movie/list`)
    return response.data.genres
}