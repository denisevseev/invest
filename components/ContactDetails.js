import React from 'react';
import { Grid, Typography, Box, Link, useTheme, useMediaQuery } from '@mui/material';
import store from './../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

const ContactDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Определение текущего языка
    const language = store.lang === 'de' ? de : en;

    // Стили для заголовков
    const headerStyles = {
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 0, // Убираем отступ снизу у заголовков
        marginTop: 2,
        fontFamily: 'DejaVu Sans, sans-serif',
    };

    // Стили для значений
    const valueStyles = {
        marginBottom: 2, // Добавляем отступ между значением и следующим заголовком
        fontFamily: 'DejaVu Sans, sans-serif',
        color: 'black',
    };

    // Стили для ссылок
    const linkStyles = {
        color: 'primary.main',
        marginBottom: 2, // Добавляем отступ после ссылок
        fontFamily: 'DejaVu Sans, sans-serif',
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
            <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center', fontWeight: 'bold', color: 'black', fontFamily: 'DejaVu Sans, sans-serif' }}>
                {language.contactDetails.title}
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
                        {language.contactDetails.companyHeader}
                    </Typography>
                    <Typography variant="body1" sx={valueStyles}>
                        <Box sx={{mt: 2}}>{language.contactDetails.companyName}</Box>
                    </Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.address.line1}</Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.address.line2}</Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.address.country}</Typography>
                    <Typography variant="body1" sx={headerStyles}>{language.contactDetails.ceoH}</Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.ceo}</Typography>
                </Grid>
                {/* Блок контактов */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.contactsHeader}
                    </Typography>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.mainTelephone}
                    </Typography>
                    <Link href="tel:+16042600738" sx={linkStyles}>
                        +1 604-260-0738
                    </Link>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.mainEmail}
                    </Typography>
                    <Link href="mailto:support@victorum-capital.com" sx={linkStyles}>
                        support@victorum-capital.com
                    </Link>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.compliance}
                    </Typography>
                    <Link href="mailto:compliance@victorum-capital.com" sx={linkStyles}>
                        compliance@victorum-capital.com
                    </Link>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.media}
                    </Typography>
                    <Link href="mailto:press@victorum-capital.com" sx={linkStyles}>
                        press@victorum-capital.com
                    </Link>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.administration}
                    </Typography>
                    <Link href="mailto:administration@victorum-capital.com" sx={linkStyles}>
                        administration@victorum-capital.com
                    </Link>
                </Grid>
                {/* Блок регистрационных данных */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1" sx={headerStyles}>
                        {language.contactDetails.registrationHeader}
                    </Typography>
                    <Typography variant="body1" sx={headerStyles}>{language.contactDetails.stateHeader}</Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.state}</Typography>
                    <Typography variant="body1" sx={headerStyles}>{language.contactDetails.registrationNumberHeader}</Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.registrationNumber}</Typography>
                    <Typography variant="body1" sx={headerStyles}>
                        AKTIENTYP:
                    </Typography>
                    <Typography variant="body1" sx={valueStyles}>
                        {language.contactDetails.shareStyle}
                    </Typography>
                    <Typography variant="body1" sx={headerStyles}>
                        ISIN:
                    </Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.isin}</Typography>
                    <Typography variant="body1" sx={headerStyles}>
                        CUSIP:
                    </Typography>
                    <Typography variant="body1" sx={valueStyles}>{language.contactDetails.cusip}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactDetails;
