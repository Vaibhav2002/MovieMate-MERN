import React from 'react';
import {Box} from "@mui/system";
import Image from "next/image";
import styles from "./BackdropItem.module.css";
import MultilineText from "@/components/styled/MultilineText";
import {useMediaQuery, useTheme} from "@mui/material";

interface BackdropItemProps {
    title: string
    backdrop: string
    overview: string
    className?: string
}

const BackdropItem = ({title, backdrop, overview, className}: BackdropItemProps) => {

    const theme = useTheme()
    const useSmallBreakpoint = useMediaQuery(theme.breakpoints.up("sm"))

    return (
        <Box
            sx={{
                width: {xs: "100%", sm: "80%", md: "55%"}
            }}
            className={`${className} ${styles.backdropCard}`}
        >
            <Image
                src={backdrop}
                alt={title}
                height={400}
                width={708}
                layout="responsive"
                style={{objectFit: "fill"}}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "60%",
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                }}
            />
            <Box
                padding={2}
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                }}
            >
                <MultilineText
                    maxLines={useSmallBreakpoint ? 2 : 1}
                    width={1}
                    variant="h4"
                >
                    {title}
                </MultilineText>

                <MultilineText
                    maxLines={useSmallBreakpoint ? 3 : 2}
                    width={1}
                    variant="body2"
                    color="text.secondary"
                >
                    {overview}
                </MultilineText>
            </Box>

        </Box>
    );
};


export default BackdropItem;
