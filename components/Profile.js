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

const Profile = () => {
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
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'black',
                }}
            >
                Profil
            </Typography>
            <Divider/>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/profile.jpg)', // Укажите путь к фоновому изображению
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
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    Victorum Capital Inc. agiert im konservativem Umfeld im Bereich des Handels und der Projektentwicklung, da das Potenzial des weltweiten Handels durch die Globalisierung immer weiter zunimmt.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    Der Warenhandel ist eine der ältesten und profitabelsten Wirtschaftstätigkeiten der Welt: Früher machten sich Karawanen mit feinstem Gold, exotischen Gewürzen und Pelzen auf den langen und beschwerlichen Weg vom Nahen und Fernen Osten nach Europa; heute transportieren Containerschiffe, Züge und Lastwagen Elektronik, Haushaltswaren, Holz und Eisenerz sowie Gas- und Ölpipelines.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    Die Organisation und Teilnahme an diesem wichtigen Handelsprozess über die nationalen Grenzen der Welt hinaus ist unsere tägliche Arbeit. Die Geschäftstätigkeit von Victorum Capital Inc. und der Victorum Group basiert auf realen und stabilen Werten mit einer langfristigen Perspektive.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    Die Victorum Capital übernimmt eine immer weiter zunehmende internationale Relevanz bei der Entwicklung und Begleitung von Infrastrukturprojekten in Osteuropa, Asien und Südamerika und engagiert sich zunehmend auch im Rohstoffsektor in Kanada und Aserbaidschan, sowie in Brasilien und Indien.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: isMobile ? '22px' : '21px'}}>
                    Die Prioritäten der Victorum Capital sind langfristig planbare kommerzielle Projekte, Planung und Entwicklung von Investitionen sowie eine individuelle und zukunftsorientierte Beratung von Regierungen und Unternehmen.
                </Typography>
            </Box>
        </Box>

    );
};

export default observer(Profile);
