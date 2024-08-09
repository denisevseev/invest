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

const VictorumTradeComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;
    const { victorumTrade } = language;

    return (
        <Box sx={{width: isMobile ? '100%' : '80%', ml: isMobile ? 1 : 30, mt: 12, textAlign: 'center'}}>
            <Typography
                variant="h4"
                align={isMobile ? 'center' : 'center'}
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'lightgray',
                    // textShadow: `0 4px 6px ${theme.palette.text.primary}`,
                    // animation: 'fadeInUp 1s ease-out',
                }}
            >
                {victorumTrade.title}
            </Typography>
            <Divider/>
            <a href="https://victorum-trade.com/" target="_blank" rel="noopener noreferrer">
                <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{width: '100%', opacity: 0.7}}/>
            </a>
            <Box sx={{textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3}}>
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    {victorumTrade.description1}
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    {victorumTrade.description2}
                </Typography>
                <Box textAlign="center" mt={2}>
                    <StyledButton
                        variant="outlined"
                        href="https://victorum-trade.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <Typography variant="body1" sx={{fontSize: isMobile ? '22px' : '21px'}}>
                            {victorumTrade.visitButton}
                        </Typography>
                    </StyledButton>
                </Box>
            </Box>
        </Box>
    );
};

export default observer(VictorumTradeComponent);
