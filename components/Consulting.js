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

const Consulting = () => {
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
                Beratung
            </Typography>
            <Divider />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/consulting.jpg)', // Укажите путь к фоновому изображению
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
                    Sicherheit steht für uns, unsere Kunden und Investoren im Vordergrund – deswegen nutzen wir unsere langjährige Erfahrung sowie unsere zahlreichen und weitreichenden Kontakte zu nationalen Unternehmens- und Wirtschaftsverbänden, um uns an Infrastrukturprojekten sowie lokalen Unternehmen auf Expansionskurs zu beteiligen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Der Schwerpunkt dieser Beteiligungsengagements liegt primär auf Projekten in den Bereichen Infrastruktur, Industrie und Energiewirtschaft sowie im Bereich der Montanindustrie. Dabei setzen wir den Fokus auf Unternehmen mit einem Jahresumsatz von bis zu 250 Millionen USD, denen wir Eigenkapital in Form von stillen und offenen Beteiligungen als flexible Alternative zu Banken oder anderen Finanzierungsinstrumenten zur Verfügung stellen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Wir sind davon überzeugt, dass wir Unternehmen, an denen wir uns beteiligen, nicht nur mit Kapital unterstützen können, sondern zusätzlich durch unser exzellentes Know-how sowie unser internationales Netzwerk zu diversen internationalen Unternehmens- und Wirtschaftsverbänden wirtschaftlich stärken können und diese Unternehmen somit auf mehreren Ebenen profitieren.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Daher verstehen wir uns nicht nur als Finanzierungs-, sondern primär als Kooperationspartner, der neben der Sicherung des finanziellen Freiraums zusätzlich beratend und unterstützend im operativen und strategischen Geschäft dem Unternehmen zur Verfügung steht.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Wir unterstützen interessante Projekte und Unternehmen im Bedarfsfall kurzfristig mit Liquidität, technischer und betriebswirtschaftlicher Beratung sowie mit unserem exzellenten Netzwerk und langjährigen persönlichen Kontakten zu Unternehmern, Interessensverbänden und Wirtschaftsförderungsgesellschaften in den USA, Kanada, Indien, Südamerika, China und anderen Ländern.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Bei Fragen oder Interesse an einer Kooperation freuen wir uns stets über einen Anruf unter{' '}
                    <StyledLink href="tel:+1-604-260-0738" color="primary">+1 604-260-0738</StyledLink> oder eine Nachricht an{' '}
                    <StyledLink href="mailto:support@victorum-capital.com" color="primary">support@victorum-capital.com</StyledLink>!
                </Typography>
            </Box>
        </Box>
    );
};

export default observer(Consulting);
