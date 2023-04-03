import {NextApiRequest, NextApiResponse} from "next";
import getMovieDetailScreenData from "@/data/repo/MovieDetailScreenRepo";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const detailScreenData = getMovieDetailScreenData(parseInt(req.query.id as string))
        res.status(200).json(detailScreenData)
    } catch (e: any) {
        res.status(500).json({error: e.message})
    }
}