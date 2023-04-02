import {Typography} from "@mui/material";
import Head from "next/head";
import React from "react";
import CenteredBox from "@/components/styled/CenteredBox";

export default function Home() {
    // TODO: Complete this landing screen
    return (
        <>
            <Head>
                <title key="title">MovieMate</title>
            </Head>
            <main>
                <CenteredBox height="100vh">
                    <Typography variant="h3">MovieMate</Typography>
                </CenteredBox>

            </main>
        </>
    )
}
