import {Box, Typography} from "@mui/material";
import Image from "next/image";

export default function Custom500() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            height="100vh"
            alignItems="center"
            sx={{background: "white"}}
        >
            <Box flex="1">
                <Image src="/error.svg" alt="Error" width={512} height={512}/>
            </Box>
            <Box flex="1" flexWrap="wrap" sx={{overflowX: "hidden"}}>
                <Typography variant="h3">Oops!</Typography>
                <Typography variant="h5">Something went wrong</Typography>
                <Typography variant="body1">Maybe our servers are down. Please come back after a while</Typography>
            </Box>
        </Box>
    )
}