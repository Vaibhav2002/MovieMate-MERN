import {getSectionFromSlug} from "@/data/utils/SectionUtils";
import Section from "@/data/models/local/Section";
import Movie, {MoviesResponse} from "@/data/models/dto/Movie";
import * as dataSource from "@/data/datasource/MoviesDataSource";

export interface SectionDataResponse {
    movies: Movie[]
    isLastPage: boolean
}


function getResponsePromise(section: Section, page: number): Promise<MoviesResponse> {
    switch (section) {
        case Section.Trending:
            return dataSource.fetchTrendingMovies(page)
        case Section.Popular:
            return dataSource.fetchPopularMovies(page)
        case Section.TopRated:
            return dataSource.fetchTopRatedMovies(page)
        case Section.NowPlaying:
            return dataSource.fetchNowPlayingMovies(page)
        case Section.Upcoming:
            return dataSource.fetchUpcomingMovies(page)
        default:
            throw Error("Invalid section")
    }
}


const getDiscoverSectionScreenData = async (slug: string, page: number) => {
    const section = getSectionFromSlug(slug as string)
    const response = await getResponsePromise(section, page)
    const isLastPage = response.page === response.total_pages
    const result: SectionDataResponse = {
        movies: response.results,
        isLastPage: isLastPage,
    }
    return result
}

export default getDiscoverSectionScreenData