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
    textDecoration: 'none', // Optional: remove underline
    '&:hover': {
        textDecoration: 'underline', // Optional: underline on hover
    },
}));


const VictorumTradeComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;
    const { victorumTrade } = language;

    return (
        <Box sx={{width: isMobile ? '100%' : '80%', ml: isMobile ? 1 : 28, mt: 12, textAlign: 'center'}}>
            <Typography
                variant="h4"
                align={isMobile ? 'center' : 'center'}
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'black',
                }}
            >
                {victorumTrade.title}
            </Typography>
            <Divider/>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/trade.jpg)', // Укажите путь к фоновому изображению
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3, // Отступы внутри контейнера
                }}
            >
                <a href="https://victorum-trade.com/" target="_blank" rel="noopener noreferrer">
                    <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{width: isMobile ? '80%' : '132%',  opacity: 0}}/>
                </a>
            </Box>
            <Divider/>
            <Box sx={{textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3}}>
                <Typography variant="body1" paragraph >
                    {victorumTrade.description1}
                </Typography>
                <Typography variant="body1" paragraph >
                    {victorumTrade.description2}
                </Typography>
                <Box textAlign="center" mt={2}>
                    <Button
                        
                        href="https://victorum-trade.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <Typography variant="body1">
                            {victorumTrade.visitButton}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default observer(VictorumTradeComponent);
