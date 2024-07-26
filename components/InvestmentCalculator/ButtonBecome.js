import {Box, Button, styled} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const AnimatedButton = styled(Button)(({ theme }) => ({
    minHeight: '5rem',
    minWidth: '22rem',
}));
const ButtonBecome = (props) => {
    const router = useRouter();
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <AnimatedButton
                onClick={() => router.push('/RegistrationForm')}
                variant="outlined"
                sx={{
                    mt: 2,
                    px: 4, // Horizontal padding
                    py: 2, // Vertical padding
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '12px', // Rounded corners
                    borderColor: 'rgba(0, 0, 255, 0.8)', // Semi-transparent blue border
                    background: 'rgba(255, 255, 255, 0)', // Transparent background
                    color: 'rgba(0, 0, 255, 0.8)', // Semi-transparent blue text color
                    textTransform: 'uppercase',
                    transition: 'transform 0.3s, box-shadow 0.3s, background 0.3s, color 0.3s',
                    '&:hover': {
                        background: 'rgba(0, 0, 255, 0.1)', // Light blue background on hover
                        color: 'rgba(0, 0, 255, 1)', // Solid blue text color on hover
                        borderColor: 'rgba(0, 0, 255, 1)', // Solid blue border color on hover
                        transform: 'scale(1.05)', // Slightly larger on hover
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow effect on hover
                    },
                    '&:active': {
                        transform: 'scale(0.98)', // Slightly smaller on click
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)', // Smaller shadow on click
                    },
                }}
            >
                Become an investor
            </AnimatedButton>
        </Box>
    )
}
export default ButtonBecome;

