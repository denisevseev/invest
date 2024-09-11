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

const EconomicDevelopment = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;

    return (
        <Box sx={{ width: isMobile ? '100%' : '75%', ml: isMobile ? 1 : 35, mt: 12, textAlign: 'center' }}>

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
                Wirtschaftsförderung
            </Typography>
            <Divider />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/ecodev.jpg)', // Specify path to background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3, // Padding inside container
                }}
            >
                <a href="https://victorum-trade.com/" target="_blank" rel="noopener noreferrer">
                    <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{ width: isMobile ? '80%' : '132%', opacity: 0 }} />
                </a>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="body1" paragraph >
                    Die wirtschaftliche Entwicklung spielt eine zentrale Rolle in der globalen Wirtschaft. In den letzten Jahren haben sich zahlreiche Länder in Osteuropa, Asien und Afrika zu wichtigen Akteuren im internationalen Handel entwickelt. Diese Region hat ein bemerkenswertes Wachstum erlebt, das durch Investitionen in Infrastruktur, Industrie und Technologie unterstützt wurde.
                </Typography>
                <Typography variant="body1" paragraph >
                    Die Herausforderungen, vor denen diese Märkte stehen, sind vielfältig und reichen von logistischen Schwierigkeiten bis hin zu komplexen regulatorischen Anforderungen. Die Fähigkeit, diese Herausforderungen zu meistern, ist entscheidend für den Erfolg von Unternehmen und Investoren in diesen aufstrebenden Märkten.
                </Typography>
                <Typography variant="body1" paragraph >
                    Unsere Expertise in der wirtschaftlichen Entwicklung ermöglicht es uns, maßgeschneiderte Lösungen anzubieten, die auf die spezifischen Bedürfnisse und Anforderungen der Region zugeschnitten sind. Von der Finanzierung großer Infrastrukturprojekte bis hin zur Unterstützung bei der Markterschließung bieten wir umfassende Dienstleistungen, die darauf abzielen, das Wachstum und die Entwicklung in diesen aufstrebenden Märkten zu fördern.
                </Typography>
                <Typography variant="body1" paragraph >
                    Unsere lokale Präsenz und unser umfangreiches Netzwerk ermöglichen es uns, effektiv mit lokalen Unternehmen und Regierungen zusammenzuarbeiten, um maßgeschneiderte Lösungen zu entwickeln, die den spezifischen Anforderungen der Region gerecht werden. Wir arbeiten eng mit unseren Partnern zusammen, um sicherzustellen, dass Projekte effizient und erfolgreich umgesetzt werden.
                </Typography>
                <Typography variant="body1" paragraph >
                    Wenn Sie mehr über unsere Dienstleistungen im Bereich der wirtschaftlichen Entwicklung erfahren möchten oder an einer Zusammenarbeit interessiert sind, stehen wir Ihnen gerne zur Verfügung. Sie erreichen uns telefonisch unter{' '}
                    <StyledLink href="tel:+1-604-260-0738" color="primary">+1 604-260-0738</StyledLink> oder per E-Mail unter{' '}
                    <StyledLink href="mailto:support@victorum-capital.com" color="primary">support@victorum-capital.com</StyledLink>.
                </Typography>
            </Box>
        </Box>
    );
};

export default observer(EconomicDevelopment);
