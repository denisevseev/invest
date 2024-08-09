import React from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, useTheme, useMediaQuery } from '@mui/material';

const InvestmentOverview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Investment Overview
            </Typography>
            <CardMedia
                component="img"
                height={isMobile ? 300 : 600}
                image="/images/invOwer.jpg" // Replace with the path to your image
                alt="Investment"
                sx={{ mb: 4 }}
            />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Investing is a powerful way to grow wealth over time. By allocating resources into various financial assets, such as stocks, bonds, or real estate, investors aim to earn a return that outpaces inflation and enhances their financial security. The key to successful investing lies in understanding the balance between risk and return, diversifying across asset classes, and maintaining a long-term perspective.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Whether you are investing for retirement, saving for a significant purchase, or simply looking to grow your wealth, it's essential to tailor your investment strategy to your individual goals and risk tolerance. Regularly reviewing your portfolio, staying informed about market trends, and adjusting your investments as needed can help you navigate the complexities of the financial markets.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Remember, the earlier you start investing, the more time your money has to grow through the power of compounding. No matter your age or financial situation, it's never too late to begin making smart investment decisions that can secure your financial future.
                </Typography>
                <Box textAlign="center" mt={4}>
                    <Button variant="contained" color="primary" size="large">
                        Invest More Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default InvestmentOverview;
