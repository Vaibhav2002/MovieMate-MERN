import Section from "@/data/models/local/Section";
import {getSlugFromSection} from "@/data/utils/SectionUtils";
import Genre from "@/data/models/dto/Genre";

enum Routes {
    HOME = "/home",

    MOVIE = "/movie",

    DISCOVER = "/discover",
}

export const getSectionRoute = (section: Section, page: number = 1) => `${Routes.DISCOVER}/${getSlugFromSection(section)}?page=${page}`

export const getMovieRoute = (id: number) => `${Routes.MOVIE}/${id}`

export const getGenreRoute = (genre: Genre, page: number = 1) => `${Routes.DISCOVER}/genre/${genre.id}?genre=${genre.name}&&page=${page}`

export default Routes