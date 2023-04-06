import React from "react";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {Box, Button, Stack, Typography, TypographyPropsVariantOverrides} from "@mui/material";
import Link from "next/link";

interface ScrollableRowProps {
    children: React.ReactNode[]
    header?: string
    headerVariant?: OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>
    canSeeMore?: Boolean

    headerHref?: string

    compact?: boolean
}

const ScrollableSection = (
    {children, header, headerVariant, canSeeMore, headerHref, compact}: ScrollableRowProps
) => {
    const isCompact = compact ?? false
    return (
        <Stack direction="column" spacing={isCompact ? 1 : 2}>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                paddingRight={2}
                alignItems="center"
            >
                {header && <Typography variant={headerVariant ?? "h5"}>{header}</Typography>}
                {canSeeMore && <Button variant="text" component={Link} href={headerHref}>See More</Button>}
            </Box>

            <Stack
                direction="row"
                spacing={isCompact ? 1.5 : 2}
                paddingRight={2}
                style={{overflowX: "auto"}}
            >
                {children}
            </Stack>

        </Stack>
    )
}

export default ScrollableSection;