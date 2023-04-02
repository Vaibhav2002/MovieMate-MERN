import {WatchProvider} from "@/data/models/dto/WatchProvider";
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";

interface WatchOnSectionProps {
    watchProviders: WatchProvider[]
}


const WatchOnSection = ({watchProviders}: WatchOnSectionProps) => {


    return (
        <Box>
            <Typography variant="overline">Watch on</Typography>
            <Stack direction="row" spacing={2} marginTop={1}>
                {watchProviders.map(provider =>
                    <Image
                        key={provider.provider_id}
                        src={provider.logo_path}
                        alt={provider.provider_name}
                        style={{borderRadius: "50%"}}
                        width={48}
                        height={48}/>
                )}
            </Stack>
        </Box>

    )
}

export default WatchOnSection