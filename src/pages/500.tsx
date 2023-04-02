import {Box, Typography} from "@mui/material";
import Image from "next/image";
import errorImg from "@/public/error.svg";

export default function Custom500(){
    return (
        <Box display="flex" flexDirection="row">
            <Box flex="1">
                <Image src={errorImg} alt="Error" width="512" height="512"/>
            </Box>
            <Box flex="1" flexWrap="wrap" sx={{overflowX:"hidden"}}>
                <Typography variant="h3">Oops!</Typography>
                <Typography variant="h5">Something went wrong</Typography>
                <Typography variant="body1">Maybe our servers are down. Please come back after a while</Typography>
            </Box>
        </Box>
    )
}