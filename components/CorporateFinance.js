import React from 'react';
import { Box, Typography, Link, Button, useTheme, useMediaQuery, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import store from './../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

// Styled Link component
const StyledLink = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    variant: 'outlined'
}));

const CorporateFinance = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en; // Определяем язык из состояния пользователя
    const { corporateFinance } = language;

    return (
        <Box sx={{ width: isMobile ? '100%' : '80%', ml: isMobile ? 1 : 28, mt: 12, textAlign: 'center' }}>
            <Typography
                variant="h4"
                align={isMobile ? 'center' : 'center'}
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'black',
                }}
            >
                {corporateFinance.title}
            </Typography>
            <Divider />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/corpFinance.jpg)', // Укажите путь к фоновому изображению
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                }}
            >
                <a href="https://victorum-trade.com/" target="_blank" rel="noopener noreferrer">
                    <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{ width: isMobile ? '80%' : '132%', opacity: 0 }} />
                </a>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                {corporateFinance.paragraphs.map((paragraph, index) => (
                    <Typography key={index} variant="body1" paragraph >
                        {paragraph}
                    </Typography>
                ))}
                <Typography variant="body1" paragraph >
                    {corporateFinance.contactText}{' '}
                    <StyledLink href="tel:+1-604-260-0738" color="primary">{corporateFinance.phone}</StyledLink> {corporateFinance.or}{' '}
                    <StyledLink href="mailto:support@victorum-capital.com" color="primary">{corporateFinance.email}</StyledLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default observer(CorporateFinance);
