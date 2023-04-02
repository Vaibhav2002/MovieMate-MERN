import Movie from "@/data/models/dto/Movie";
import Genre from "@/data/models/dto/Genre";
import {GetServerSideProps} from "next";
import {fetchMoviesByGenre} from "@/data/datasource/MoviesDataSource";
import {Box, Typography} from "@mui/material";
import MoviesGrid from "@/components/screens/discoverSection/MoviesGrid";
import PageNavigationItem from "@/components/PageNavigationItem";
import React from "react";
import {useRouter} from "next/router";
import {getGenreRoute} from "@/Routes";
import Head from "next/head";


export const getServerSideProps: GetServerSideProps<DiscoverGenreProps> = async (context) => {
    const id = parseInt(context.params!.id as string)
    const {page, genre} = context.query
    const response = await fetchMoviesByGenre(id, parseInt(page as string))
    return {
        props: {
            genre: {id: id, name: genre} as Genre,
            movies: response.results,
            page: response.page,
            isLastPage: response.page === response.total_pages
        }
    }
}

interface DiscoverGenreProps {
    genre: Genre
    movies: Movie[]
    page: number
    isLastPage: boolean
}


const DiscoverGenreScreen = ({genre, movies, page, isLastPage}: DiscoverGenreProps) => {
    const router = useRouter()
    const isFirstPage = page === 1
    const nextPage = () => router.push(getGenreRoute(genre, page + 1))
    const prevPage = () => router.back()


    return (
        <>
            <Head>
                <title key="title">{genre.name} Movies</title>
            </Head>
            <main>
                <Box sx={{overflowX: "hidden"}} padding={4}>
                    <Typography variant="h4" marginBottom={3}>{genre.name}</Typography>

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

            </main>
        </>
    )
}

export default DiscoverGenreScreen