import {NextApiRequest, NextApiResponse} from "next";
import getDiscoverSectionScreenData from "@/data/repo/DiscoverSectionScreenRepo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {slug, page} = req.query
        const result = getDiscoverSectionScreenData(slug as string, parseInt(page as string))
        return res.status(200).json(result)
    } catch (e: any) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }

}