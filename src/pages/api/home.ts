import {NextApiRequest, NextApiResponse} from "next";
import HomeData from "@/uiDataHolders/HomeData";
import {getHomeScreenData} from "@/data/repo/HomeScreenRepo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const homeData: HomeData = await getHomeScreenData()
    return res.status(200).json(homeData)
}