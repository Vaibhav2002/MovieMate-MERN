import React from 'react';
import Section from "@/data/models/local/ShowSection";
import {ShowSectionList} from "@/data/models/local/HomeData";
import {Box, Button, Stack, Typography} from "@mui/material";
import ShowItem from "@/components/showItem/ShowItem";
import BackdropItem from "@/components/BackdropItem/BackdropItem";
import {Carousel} from "react-responsive-carousel";

interface ShowSectionProps {
    section: ShowSectionList
}


const ShowSection = ({section: {header, shows}}: ShowSectionProps) => {

    const isBackdropSection = header === Section.OnTheAir

    const showComponents = shows.map(show => {
        if (isBackdropSection)
            return <BackdropItem
                key={show.id}
                title={show.name}
                backdrop={show.backdrop_path ?? ""}
                overview={show.overview}
            />
        else
            return <ShowItem key={show.id} show={show}/>
    })

    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                alignItems="center"
            >
                <Typography variant="h5">{header}</Typography>
                <Button variant="text">See More</Button>
            </Box>

            {/*<Carousel*/}
            {/*    axis="horizontal"*/}
            {/*    emulateTouch={true}*/}
            {/*    centerMode={isBackdropSection}*/}
            {/*    autoPlay={isBackdropSection}*/}
            {/*    infiniteLoop={isBackdropSection}*/}
            {/*    centerSlidePercentage={60}*/}
            {/*>*/}
            {/*    {...showComponents}*/}
            {/*</Carousel>*/}

            <Stack
                direction="row"
                marginTop={2}
                spacing={2}
                style={{overflowX: "auto"}}
            >{showComponents}</Stack>
        </Box>
    );
};


export default ShowSection;
