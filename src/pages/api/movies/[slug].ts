import {NextApiRequest, NextApiResponse} from "next";
import Section from "@/data/models/local/Section";
import Movie, {MoviesResponse} from "@/data/models/dto/Movie";
import * as dataSource from "@/data/datasource/MoviesDataSource";
import {getSectionFromSlug} from "@/data/utils/SectionUtils";
import {assertIsDefined} from "@/data/utils/Helpers";

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
        case Section.Latest:
            return dataSource.fetchLatestMovies(page)
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {slug, page} = req.query
    assertIsDefined(slug)
    assertIsDefined(page)
    const section = getSectionFromSlug(slug as string)
    const response = await getResponsePromise(section, parseFloat(page as string))
    const isLastPage = response.page === response.total_pages
    const result: SectionDataResponse = {
        movies: response.results,
        isLastPage: isLastPage
    }
    return res.status(200).json(result)
}