import {MovieSection} from "@/uiDataHolders/MovieSection";
import {GetStaticProps} from "next";
import axios from "axios";
import {Box, Stack} from "@mui/material";
import React from "react";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import NavBarData from "@/uiDataHolders/NavBarData";
import {
    ExploreRounded,
    HomeRounded,
    LocalFireDepartmentRounded,
    SportsRounded,
    StarRounded,
    TheaterComedyRounded,
    WhatshotRounded
} from "@mui/icons-material";
import HomeSideMenu from "@/components/home/HomeSideMenu";
import MovieSectionItem from "@/components/movieSection/MovieSectionItem";
import MovieMateAppBar from "@/components/MovieMateAppBar";
import Routes, {getGenreRoute} from "@/Routes";
import Genre, {genreId} from "@/data/models/local/Genre";

export const getStaticProps: GetStaticProps<HomeScreenProps> = async () => {
    const movieList = (await axios.get<MovieSection[]>(`${getBaseUrl()}/api/home`)).data

    return {
        props: {movies: movieList},
        revalidate: 60 * 60 // 1 hour
    }
}

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
            title: 'Genres',
            items: [
                {
                    name: Genre.Action,
                    icon: <LocalFireDepartmentRounded/>,
                    href: getGenreRoute(genreId(Genre.Action))
                },
                {
                    name: Genre.Sports,
                    icon: <SportsRounded/>,
                    href: getGenreRoute(genreId(Genre.Sports))
                },
                {
                    name: Genre.Comedy,
                    icon: <TheaterComedyRounded/>,
                    href: getGenreRoute(genreId(Genre.Comedy))
                },
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
        }
    ]

}

interface HomeScreenProps {
    movies: MovieSection[]
}

const HomeScreen = ({movies}: HomeScreenProps) => {
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
