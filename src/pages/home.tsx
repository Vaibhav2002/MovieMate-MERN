import {MovieSection} from "@/uiDataHolders/MovieSection";
import {GetStaticProps} from "next";
import axios from "axios";
import {Box, Stack} from "@mui/material";
import React from "react";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import NavBarData, {NavBarItem} from "@/uiDataHolders/NavBarData";
import {ExploreRounded, HomeRounded, StarRounded, WhatshotRounded} from "@mui/icons-material";
import HomeSideMenu from "@/components/home/HomeSideMenu";
import MovieSectionItem from "@/components/movieSection/MovieSectionItem";
import MovieMateAppBar from "@/components/MovieMateAppBar";
import Routes, {getGenreRoute} from "@/Routes";
import Genre from "@/data/models/dto/Genre";
import HomeData from "@/uiDataHolders/HomeData";

export const getStaticProps: GetStaticProps<HomeScreenProps> = async () => {
    const homeData = (await axios.get<HomeData>(`${getBaseUrl()}/api/home`)).data

    return {
        props: {
            movies: homeData.sections,
            genres: homeData.genres
        },
        revalidate: 60 * 60 // 1 hour
    }
}

interface HomeScreenProps {
    movies: MovieSection[]
    genres: Genre[]
}

const HomeScreen = ({movies, genres}: HomeScreenProps) => {

    const navBarData: NavBarData = {
        sections: [
            {
                title: 'Menu',
                items: [
                    {
                        name: 'Home',
                        icon: <HomeRounded/>,
                        href: '/home'
                    },
                    {
                        //TODO: Add Discover Page
                        name: 'Discover',
                        icon: <ExploreRounded/>,
                        href: Routes.DISCOVER
                    }
                ]
            },
            {
                title: 'Library',
                items: [
                    {
                        //TODO: Nav to Top Rated Movies Category Page
                        name: 'Top Rated',
                        icon: <StarRounded/>,
                        href: '/home'
                    },
                    {
                        //TODO: Nav to Popular Movies Category Page
                        name: 'Popular',
                        icon: <WhatshotRounded/>,
                        href: '/home'
                    }
                ]
            },
            {
                title: 'Genres',
                items: genres.map<NavBarItem>(genre => (
                    {
                        name: genre.name,
                        href: getGenreRoute(genre.id)
                    }
                ))
            }
        ]
    }

    return (
        <main>
            <MovieMateAppBar/>

            <Box
                display="flex"
                alignItems="flex-start"
            >

                <Box display="sticky" zIndex={5}><
                    HomeSideMenu data={navBarData}/>
                </Box>

                <Box flex="1" sx={{overflowX: "hidden"}}>
                    <Stack
                        direction="column"
                        spacing={7}
                        paddingY={2}
                    >
                        {movies.map(section => <MovieSectionItem key={section.header} section={section}/>)}
                    </Stack>
                </Box>
            </Box>
        </main>
    );
};


export default HomeScreen;
