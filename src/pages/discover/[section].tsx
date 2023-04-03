import {GetServerSideProps} from "next";
import {getSectionFromSlug} from "@/data/utils/SectionUtils";
import Movie from "@/data/models/dto/Movie";
import Section, {nonMovieSpecificSections} from "@/data/models/local/Section";
import {Box, Typography} from "@mui/material";
import SideMenu from "@/components/SideMenu";
import React, {useCallback, useMemo} from "react";
import {getSectionRoute} from "@/Routes";
import NavBarData, {NavBarItem} from "@/uiDataHolders/NavBarData";
import MoviesGrid from "@/components/screens/discoverSection/MoviesGrid";
import {useRouter} from "next/router";
import PageNavigationItem from "@/components/PageNavigationItem";
import Head from "next/head";
import getDiscoverSectionScreenData from "@/data/repo/DiscoverSectionScreenRepo";

export const getServerSideProps: GetServerSideProps<DiscoverSectionScreenProps> = async (context) => {
    const slug = context.params!.section as string
    const section = getSectionFromSlug(slug)
    const page = context.query.page as string

    const response = await getDiscoverSectionScreenData(section, parseInt(page))

    return {
        props: {
            section: section,
            movies: response.movies,
            page: parseInt(page),
            isLastPage: response.isLastPage
        }
    }
}

interface DiscoverSectionScreenProps {
    section: Section
    movies: Movie[]
    page: number
    isLastPage: boolean
}

const DiscoverSectionScreen = ({section, movies, page, isLastPage}: DiscoverSectionScreenProps) => {
    const router = useRouter()
    const isFirstPage = page === 1

    const sectionItems = useCallback((section: Section): NavBarItem => ({
        name: section,
        href: getSectionRoute(section)
    }), [])

    const navBarData = useMemo<NavBarData>(() => ({
        sections: [{
            title: 'Discover',
            items: nonMovieSpecificSections.map(sectionItems)
        }]
    }), [sectionItems])

    const sideMenu = useMemo(() =>
        <Box sx={{display: {xs: "none", sm: "fixed"}}}>
            <SideMenu data={navBarData}/>
        </Box>, [navBarData]);

    const nextPage = () => router.push(getSectionRoute(section, page + 1))

    const prevPage = () => router.back()

    return (
        <>
            <Head>
                <title key="title">{section} Movies</title>
            </Head>
            <main>
                <Box
                    display="flex"
                    alignItems="flex-start"
                >
                    {sideMenu}
                    <Box flex="1" sx={{overflowX: "hidden"}} padding={3}>
                        <Typography variant="h4" marginBottom={3}>{section}</Typography>

                        <MoviesGrid movies={movies}/>

                        <Box marginY={4}>
                            <PageNavigationItem
                                page={page}
                                isLastPage={isLastPage}
                                isFirstPage={isFirstPage}
                                onNextPage={nextPage}
                                onPrevPage={prevPage}/>
                        </Box>

                    </Box>
                </Box>
            </main>
        </>

    )
}

export default DiscoverSectionScreen