import * as dataSource from "@/data/datasource/TvShowsDataSource";
import {NextApiRequest, NextApiResponse} from "next";
import {isFulfilled} from "@/data/utils/PromiseFulfilled";
import {addUrlToShow} from "@/data/utils/ImageUrlHelper";
import ShowSection from "@/data/models/local/ShowSection";
import {ShowSectionList} from "@/data/models/local/HomeData";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const onTheAirShows = dataSource.fetchOnTheAirShows()
    const airingTodayShows = dataSource.fetchAiringTodayShows()
    const topRatedShows = dataSource.fetchTopRatedShows()
    const popularShows = dataSource.fetchPopularShows()
    const latestShows = dataSource.fetchLatestShows()

    const homeSections = [
        ShowSection.OnTheAir,
        ShowSection.AiringToday,
        ShowSection.TopRated,
        ShowSection.Popular,
        ShowSection.Latest,
    ]

    const responses = await Promise.allSettled(
        [onTheAirShows, airingTodayShows, topRatedShows, popularShows, latestShows]
    )

    const showList = responses.filter(isFulfilled)
        .map(response => response.value)
        .map((result, index): ShowSectionList => ({
            header: homeSections[index],
            shows: result.results ? result.results.map(addUrlToShow) : []
        }))
        .map(list => (list.header === ShowSection.OnTheAir)
            ? {...list, movies: list.shows.slice(0, 8)}
            : list)
        .filter(data => data.shows.length > 0)

    return res.status(200).json(showList)
}