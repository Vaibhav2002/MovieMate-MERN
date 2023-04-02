import Section from "@/data/models/local/Section";
import {getSlugFromSection} from "@/data/utils/SectionUtils";

enum Routes {
    HOME = "/home",

    MOVIE = "/movie",

    DISCOVER = "/discover",
    GENRE = "/genre",
}

export const getSectionRoute = (section: Section, page:number = 1) => `${Routes.DISCOVER}/${getSlugFromSection(section)}?page=${page}`

export const getMovieRoute = (id: number) => `${Routes.MOVIE}/${id}`

export const getGenreRoute = (genre: number) => `${Routes.GENRE}/${genre}`

export default Routes