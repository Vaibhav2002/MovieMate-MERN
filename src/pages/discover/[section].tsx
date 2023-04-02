import {GetServerSideProps} from "next";
import {assertIsDefined} from "@/data/utils/Helpers";
import {getSectionFromSlug} from "@/data/utils/SectionUtils";
import axios from "axios";
import {SectionDataResponse} from "@/pages/api/movies/[slug]";
import {getBaseUrl} from "@/data/utils/ServerSideBaseUrl";
import Movie from "@/data/models/dto/Movie";
import Section, {nonMovieSpecificSections} from "@/data/models/local/Section";
import {Box, Button, Typography} from "@mui/material";
import SideMenu from "@/components/SideMenu";
import React, {useCallback, useMemo} from "react";
import {getSectionRoute} from "@/Routes";
import NavBarData, {NavBarItem} from "@/uiDataHolders/NavBarData";
import MoviesGrid from "@/components/screens/discoverSection/MoviesGrid";
import {useRouter} from "next/router";

export const getServerSideProps: GetServerSideProps<DiscoverSectionProps> = async (context) => {
    assertIsDefined(context.params)
    const slug = context.params!.section as string
    const section = getSectionFromSlug(slug)
    const page = context.query.page as string

    const response = await axios.get<SectionDataResponse>(`${getBaseUrl()}/api/movies/${slug}?page=${page}`)

    return {
        props: {
            section: section,
            movies: response.data.movies,
            page: parseInt(page),
            isLastPage: response.data.isLastPage
        }
    }
}

interface DiscoverSectionProps {
    section: Section
    movies: Movie[]
    page: number
    isLastPage: boolean
}

const DiscoverSection = ({section, movies, page, isLastPage}: DiscoverSectionProps) => {
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

    const nextPage = useCallback(() => {
        router.push(getSectionRoute(section, page + 1))
    }, [page, router, section])

    const prevPage = useCallback(
        () => {router.back()}, [router],
    );

    const nextButton = useMemo(() =>
            <Button variant="text" disabled={isLastPage} onClick={nextPage}>Next</Button>
        , [isLastPage, nextPage])

    const prevButton = useMemo(() =>
            <Button variant="text" disabled={isFirstPage} onClick={prevPage}>Prev</Button>
        , [isFirstPage, prevPage])


    return (
        <Box
            display="flex"
            alignItems="flex-start"
        >
            {sideMenu}
            <Box flex="1" sx={{overflowX: "hidden"}} padding={3}>
                <Typography variant="h4" marginBottom={3}>{section}</Typography>

                <MoviesGrid movies={movies}/>

                <Box display="flex" justifyContent="space-between" marginY={4}>
                    {prevButton}
                    <Typography variant="button">Page {page}</Typography>
                    {nextButton}
                </Box>
            </Box>
        </Box>

    )
}

export default DiscoverSection