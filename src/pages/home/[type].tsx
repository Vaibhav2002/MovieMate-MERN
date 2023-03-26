import {HomeData} from "@/data/models/local/HomeData";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {Stack} from "@mui/material";
import React from "react";
import MovieSection from "@/components/movieSection/MovieSection";
import styles from "@/styles/pages/Home.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = ["movies"]
    const paths = slugs.map(slug => ({params: {type: slug}}))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<HomeScreenProps> = async () => {
    const response = await axios.get<HomeData>(`http://localhost:3000/api/home`)
    const homeData = response.data
    return {
        props: {homeData: homeData},
    }
}

interface HomeScreenProps {
    homeData: HomeData
}

const HomeScreen = ({homeData: {data}}: HomeScreenProps) => {
    return (
        <>
            <main className={styles.homeScreen}>
                <Stack direction="column" spacing={7}>
                    {data.map(section => <MovieSection key={section.header} section={section}/>)}
                </Stack>
            </main>
        </>
    );
};

export default HomeScreen;
