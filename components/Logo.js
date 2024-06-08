import Image from "next/image";
import React from "react";
import {Box, useMediaQuery, useTheme} from "@mui/material";

export default function Logo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ height: isMobile ? '40px' : '65px', display: 'flex', alignItems: 'center', marginTop: '0.6rem' }}>
            <Image src="/logo.png" alt="Logo" layout="intrinsic" width={isMobile ? 150 : 220} height={isMobile ? 40 : 65} />
        </Box>
    )
}