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

const CorporateFinance = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;
    const { victorumTrade } = language;

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
                Corporate Finance
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
                    p: 3, // Отступы внутри контейнера
                }}
            >
                <a href="https://victorum-trade.com/" target="_blank" rel="noopener noreferrer">
                    <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{ width: isMobile ? '80%' : '132%', opacity: 0 }} />
                </a>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    2019 sind Transaktionen zwischen Osteuropa, Kanada und Deutschland in Höhe von rund 250 Mrd. USD nicht erfolgreich realisiert worden, da Finanzierungs-, Zoll- und Logistikprobleme diese blockiert haben.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Dadurch sind den beteiligten Gesellschaften nicht nur enorme Gewinne entgangen, sondern auch erhebliche vermeidbare Kosten entstanden.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Unser lokale Präsenz, die Kenntnis der nationalen Zoll- und Logistikherausforderungen sowie unsere Corporate Finance Lösungen sorgen dafür, dass geplante lukrative Im- und Exporttransaktionen sich nicht verteuern oder verzögern. Unsere erfahrenen Mitarbeiter sowie das gemeinsame Netzwerk mit den Unternehmen der Victorum Group sorgen für die reibungslose Finanzierung von Handelsgeschäften bis 250 Millionen USD.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Dabei finden Sie Niederlassungen der Victorum Group in China, Indien, Türkei, Nigeria, Namibia, Brasilien sowie Ländern in Osteuropa. Dadurch können wir einen reibungslosen Handelsprozess von Waren, Gütern und Rohstoffen durch lokale Mitarbeiter mit exzellenten Kontakten sichern.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Sie interessieren sich für unsere Corporate Finance Lösungen, Beteiligungen oder Mezzanine Capital?
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Bei Fragen sind wir gerne für Sie unter{' '}
                    <StyledLink href="tel:+1-604-260-0738" color="primary">+1 604-260-0738</StyledLink> oder per Mail unter{' '}
                    <StyledLink href="mailto:support@victorum-capital.com" color="primary">support@victorum-capital.com</StyledLink> erreichbar!
                </Typography>
            </Box>
        </Box>
    );
};

export default observer(CorporateFinance);
