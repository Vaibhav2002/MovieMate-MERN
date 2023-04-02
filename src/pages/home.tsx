import {MovieSection} from "@/uiDataHolders/MovieSection";
import {GetStaticProps} from "next";
import axios from "axios";
import {Box, Stack} from "@mui/material";
import React from "react";
import {baseUrl} from "@/data/utils/ServerSideBaseUrl";
import NavBarData, {NavBarItem} from "@/uiDataHolders/NavBarData";
import {ExploreRounded, HomeRounded, StarRounded, WhatshotRounded} from "@mui/icons-material";
import SideMenu from "@/components/SideMenu";
import MovieSectionItem from "@/components/MovieSectionItem";
import MovieMateAppBar from "@/components/MovieMateAppBar";
import Routes, {getGenreRoute, getSectionRoute} from "@/Routes";
import Genre from "@/data/models/dto/Genre";
import HomeData from "@/uiDataHolders/HomeData";

export const getStaticProps: GetStaticProps<HomeScreenProps> = async () => {
    const homeData = (await axios.get<HomeData>(`${baseUrl}/api/home`)).data

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
    const sections = movies.map(section => section.header)
    const navBarData: NavBarData = {
        sections: [
            {
                title: 'Library',
                items: sections.map<NavBarItem>(section => (
                    {
                        name: section,
                        href: getSectionRoute(section)
                    }
                ))
            },
            {
                title: 'Genres',
                items: genres.map<NavBarItem>(genre => (
                    {
                        name: genre.name,
                        href: getGenreRoute(genre)
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

                <Box sx={{display: { xs:"none", md:"fixed" }}}>
                    <SideMenu data={navBarData}/>
                </Box>

                <Box flex="1" sx={{overflowX: "hidden"}}>
                    <Stack
                        direction="column"
                        paddingLeft={2}
                        spacing={7}
                        paddingY={2}
                    >
                        {movies.map(section => <MovieSectionItem key={section.header} section={section} canSeeMore={true}/>)}
                    </Stack>
                </Box>
            </Box>
        </main>
    );
};


export default HomeScreen;
