import React from "react";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {Box, Button, Stack, Typography, TypographyPropsVariantOverrides} from "@mui/material";
import Link from "next/link";

interface ScrollableRowProps {
    children: React.ReactNode[]
    header: string
    headerVariant?: OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>
    canSeeMore?: Boolean

    headerHref: string
}

const ScrollableRow = ({children, header, headerVariant, canSeeMore, headerHref}: ScrollableRowProps) => {
    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                paddingRight={2}
                alignItems="center"
            >
                <Typography variant={headerVariant ?? "h5"}>{header}</Typography>
                {canSeeMore && <Button variant="text" component={Link} href={headerHref}>See More</Button>}
            </Box>

            <Stack
                direction="row"
                marginTop={2}
                spacing={2}
                paddingRight={2}
                style={{overflowX: "auto"}}
            >{children}</Stack>

        </Box>
    )
}

export default ScrollableRow;