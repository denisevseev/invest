import React from 'react';
import { Grid, Typography, Box, Link, useTheme, useMediaQuery } from '@mui/material';

const ContactDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    // Общие отступы и стили для заголовков
    const headerStyles = {
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 2,
        marginTop: 2,
    };

    const sectionStyles = {
        marginBottom: 2,
    };

    return (
        <Box
            sx={{
                padding: { xs: 2, md: 6, lg: 12 },
                marginLeft: { xs: 0, md: '10%' },
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
            <Grid container spacing={isMobile ? 2 : 4}>
                {/* Блок компании */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1" sx={headerStyles}>
                        COMPANY:
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'black', ...sectionStyles }}>Victorum Capital Inc.</Typography>
                    <Typography variant="body1" sx={{ color: 'black', ...sectionStyles }}>2102-58 Keefer Place</Typography>
                    <Typography variant="body1" sx={{ color: 'black', ...sectionStyles }}>Vancouver, BC V6B 0B6</Typography>
                    <Typography variant="body1" sx={{ color: 'black', ...sectionStyles }}>Canada</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', ...sectionStyles }}>CEO: Osbert Doehl</Typography>
                </Grid>
                {/* Блок контактов */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1" sx={headerStyles}>
                        CONTACTS:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        Main Telephone:
                    </Typography>
                    <Link href="tel:+16042600738" sx={{ color: 'primary.main', ...sectionStyles }}>
                        +1 604-260-0738
                    </Link>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        Main Email:
                    </Typography>
                    <Link href="mailto:support@victorum-capital.com" sx={{ color: 'primary.main', ...sectionStyles }}>
                        support@victorum-capital.com
                    </Link>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        Compliance:
                    </Typography>
                    <Link href="mailto:compliance@victorum-capital.com" sx={{ color: 'primary.main', ...sectionStyles }}>
                        compliance@victorum-capital.com
                    </Link>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        Media:
                    </Typography>
                    <Link href="mailto:press@victorum-capital.com" sx={{ color: 'primary.main', ...sectionStyles }}>
                        press@victorum-capital.com
                    </Link>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        Administration:
                    </Typography>
                    <Link href="mailto:administration@victorum-capital.com" sx={{ color: 'primary.main', ...sectionStyles }}>
                        administration@victorum-capital.com
                    </Link>
                </Grid>
                {/* Блок регистрационных данных */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1" sx={headerStyles}>
                        REGISTRATION:
                    </Typography>
                    <Typography variant="body1" sx={{ ...sectionStyles }}>State: British Columbia (BC)</Typography>
                    <Typography variant="body1" sx={{ ...sectionStyles }}>Registration number: 790478002BC0001</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        Share Style: Common CLASS A RESTRICTED SHARES
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        ISIN:
                    </Typography>
                    <Typography variant="body1" sx={{ ...sectionStyles }}>CA92642D1024</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ...sectionStyles }}>
                        CUSIP:
                    </Typography>
                    <Typography variant="body1" sx={{ ...sectionStyles }}>92642D102</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactDetails;
