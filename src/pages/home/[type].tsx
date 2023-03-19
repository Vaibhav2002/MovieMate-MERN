import {HomeData} from "@/data/models/local/HomeData";
import {Typography} from "@mui/material";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import {Movie} from "@/data/models/dto/movie/Movie";

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = ["movies"]
    const paths = slugs.map(slug => ({params: {type: slug}}))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<HomeScreenProps> = async ({params}) => {
    const response = await axios.get<HomeData>(`${getBaseUrl()}/api/home`)
    const homeData = response.data
    return {
        props: {data: homeData}
    }
}

interface HomeScreenProps {
    data: HomeData
}

const HomeScreen = ({data}: HomeScreenProps) => {
    const movies = data.data.map( d=> d.movies)
        .flat()
    return (
        <main>
            <Typography variant="body1" padding={2}>
                {movies.toString()}
            </Typography>
        </main>
    );
};

export default HomeScreen;
