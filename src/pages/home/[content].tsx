import {MovieSectionList, ShowSectionList} from "@/data/models/local/HomeData";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {Stack} from "@mui/material";
import React from "react";
import MovieSection from "@/components/movieSection/MovieSection";
import styles from "@/styles/pages/Home.module.css";
import HomeAppBar from "@/components/home/HomeAppBar";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import ShowSection from "@/components/showSection/ShowSection";
import {useRouter} from "next/router";

export enum Page {
    "MOVIES" = "Movies",
    "TV_SHOWS" = "Tv Shows"
}

const pages = Object.values(Page)

const pageToSlug = (page: Page) => page.toLowerCase().replace(" ", "-")
const slugToPage = (slug: string) => {
    if(slug === pageToSlug(Page.MOVIES)) return Page.MOVIES
    else return Page.TV_SHOWS
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = pages.map(pageToSlug)
    const paths = slugs.map(slug => ({params: {content: slug}}))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<HomeScreenProps> = async ({params}) => {
    const content = params?.content as string
    const page:Page = slugToPage(content)
    let movieList: MovieSectionList[] = []
    let showList: ShowSectionList[] = []

    if (page === Page.MOVIES)
        movieList = (await axios.get<MovieSectionList[]>(`${getBaseUrl()}/api/home/movies`)).data
    else
        showList = (await axios.get<ShowSectionList[]>(`${getBaseUrl()}/api/home/shows`)).data

    return {
        props: {
            movies: movieList,
            shows: showList,
            page: page
        },
    }
}

interface HomeScreenProps {
    movies: MovieSectionList[]
    shows: ShowSectionList[]

    page: Page
}

const HomeScreen = ({movies, shows, page}: HomeScreenProps) => {
    const router = useRouter()

    const onPageSelect = (page: Page) => {
        router.push(pageToSlug(page))
    }

    return (
        <main>
            <HomeAppBar pages={pages} onPageClick={onPageSelect}/>
            <Stack className={styles.homeScreen} direction="column" spacing={7}>

                {page === Page.MOVIES && movies.map(section =>
                    <MovieSection key={section.header} section={section}/>)}
                {page === Page.TV_SHOWS && shows.map(section =>
                    <ShowSection key={section.header} section={section}/>)}
            </Stack>
        </main>
    );
};


export default HomeScreen;
