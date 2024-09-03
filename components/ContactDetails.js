import React from 'react';
import { Grid, Typography, Box, Link, useTheme, useMediaQuery } from '@mui/material';

const ContactDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                padding: { xs: 2, md: 12 },
                marginLeft: '10%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    zIndex: 1,
                },
                '& > *': {
                    position: 'relative',
                    zIndex: 2,
                },
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
                Contact Information
            </Typography>
            <Box
                component="img"
                src="/images/contact.jpg"
                alt="Contact"
                sx={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: 5,
                    width: isMobile ? '100%' : '105%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                }}
            />
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h5" sx={{ marginBottom: 3, color: 'black' }}>
                        Victorum Capital Inc.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'black' }}>2102-58 Keefer Place</Typography>
                    <Typography variant="body1" sx={{ color: 'black' }}>Vancouver, BC V6B 0B6, Canada</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Legal representative:
                        </Typography>
                        <Typography variant="body1">CEO Osbert Doehl</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Telephone:
                        </Typography>
                        <Link href="tel:+16042600738" sx={{ color: 'primary.main' }}>
                            +1 604-260-0738
                        </Link>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Compliance:
                        </Typography>
                        <Link href="mailto:compliance@victorum-capital.com" sx={{ color: 'primary.main' }}>
                            compliance@victorum-capital.com
                        </Link>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Contacts for the media:
                        </Typography>
                        <Link href="mailto:press@victorum-capital.com" sx={{ color: 'primary.main' }}>
                            press@victorum-capital.com
                        </Link>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Administrative management:
                        </Typography>
                        <Link href="mailto:administration@victorum-capital.com" sx={{ color: 'primary.main' }}>
                            administration@victorum-capital.com
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Registered in British Columbia, registration number:
                        </Typography>
                        <Typography variant="body1">790478002BC0001</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Information about Victorum Capital Inc. Securities
                        </Typography>
                        <Typography variant="body1">STYLE: COMMON CLASS A RESTRICTED SHARES</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            ISIN:
                        </Typography>
                        <Typography variant="body1">CA92642D1024</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            CUSIP:
                        </Typography>
                        <Typography variant="body1">92642D102</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Transfer Agent
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black' }}>Integral Transfer Agency Inc.</Typography>
                        <Typography variant="body1" sx={{ color: 'black' }}>100 Queen St E</Typography>
                        <Typography variant="body1" sx={{ color: 'black' }}>Toronto, ON M5C 1S6, Canada</Typography>
                        <Link href="http://www.integraltransfer.com" target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>
                            www.integraltransfer.com
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Competent regulatory authority
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black' }}>U.S. Securities and Exchange Commission</Typography>
                        <Typography variant="body1" sx={{ color: 'black' }}>100 F Street, NE Washington</Typography>
                        <Typography variant="body1" sx={{ color: 'black' }}>DC 20549-0213</Typography>
                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Telephone:
                            </Typography>
                            <Link href="tel:+18007320330" sx={{ color: 'primary.main' }}>
                                (800) 732-0330
                            </Link>
                        </Box>
                        <Typography variant="body1" sx={{ color: 'black' }}>Fax: (202) 772-9295</Typography>
                        <Link href="http://www.sec.gov" target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>
                            www.sec.gov
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactDetails;
