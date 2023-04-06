import {Cast} from "@/data/models/dto/Cast";
import componentStyles from "@/styles/components/components.module.css";
import Image from "next/image";
import {Box} from "@mui/system";
import React from "react";
import {Stack} from "@mui/material";
import MultilineText from "@/components/styled/MultilineText";

interface CastItemProps{
    cast:Cast
    className?:string
}


const CastItem = ({cast, className}:CastItemProps) => {
    return (
        <Stack
            width="124px"
            className={className}
            flexShrink={0}
            direction="column"
        >
            <Box className={componentStyles.posterCard} marginBottom={1}>
                <Image
                    src={cast.profile_path ?? ""}
                    alt={cast.name}
                    height={200}
                    width={150}
                    loading='lazy'
                    layout="responsive"
                    style={{objectFit: "cover"}}
                />
            </Box>

            <MultilineText variant="body2" maxLines={2}>{cast.name}</MultilineText>
            <MultilineText variant="caption" color="text.secondary" maxLines={2}>{cast.character}</MultilineText>

        </Stack>
    )
}

export default CastItem