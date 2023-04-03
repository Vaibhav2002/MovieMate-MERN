import {Box, Button, Theme, Typography, useMediaQuery} from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import CenteredBox from "@/components/styled/CenteredBox";
import Link from "next/link";
import Routes from "@/Routes";

export default function Home() {

    const isBelowSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const titleVariant = isBelowSm ? "h4" : "h2"
    const taglineVariant = isBelowSm ? "caption" : "body1"

    return (
        <>
            <Head>
                <title key="title">MovieMate</title>
            </Head>
            <main>
                <CenteredBox
                    sx={{justifyContent: {sx:"center", sm:"end"}}}
                    height="100vh"
                    paddingX={4}
                    overflow="hidden"
                >
                    <Typography variant={titleVariant} fontWeight="bolder" marginBottom={2}>MovieMate</Typography>
                    <Typography
                        whiteSpace="initial"
                        textAlign="center"
                        color="text.secondary"
                        variant={taglineVariant}
                        marginBottom={4}
                    >
                        Discover your next favorite movie with MovieMate -
                        the ultimate movie guide with a hand-picked selection of the best films.
                    </Typography>

                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        sx={{marginBottom: 8}}
                        component={Link}
                        href={Routes.HOME}
                    >Get Started</Button>

                    <CenteredBox
                        paddingX="10%"
                        marginBottom="-26px"
                        sx={{display:{xs:"none", sm:"block"}}}
                    >
                        <img
                            src="/static/landing.png"
                            alt="Landing"
                            width="100%"
                            style={{objectFit:"contain", aspectRatio:"21/9"}}
                        />
                    </CenteredBox>


                </CenteredBox>
            </main>
        </>
    )
}
