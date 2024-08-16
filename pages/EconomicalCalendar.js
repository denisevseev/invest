import React, { useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery, Divider } from '@mui/material';

const EconomicCalendar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('body').style.fontSize = '60px';
        }, 5000);
    }, []);

    return (
        <Box sx={{ width: isMobile ? '100%' : '80%', ml: isMobile ? 1 : 28, mt: 12, textAlign: 'center' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    color: 'black',
                }}
            >
                Wirtschaftskalender
            </Typography>
            <Divider sx={{ marginBottom: '2rem' }} />

            {/* Image Section */}
            <Box
                component="img"
                src="/images/economicc.jpg"
                alt="Economic Image"
                sx={{
                    width: '100%',
                    maxHeight: '400px',
                    marginBottom: '2rem'
                }}
            />

            {/* Text Section */}
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="h6" gutterBottom>
                    In einer globalisierten Welt ist es für Investoren wichtig, stets die weltweiten wirtschaftlichen Geschehnisse gut im Auge zu behalten.
                </Typography>
                <Typography variant="body1" paragraph>
                    Dieser Bereich unserer Webseite gibt Ihnen eine Übersicht über die wichtigsten nationalen und internationalen makroökonomischen Bekanntmachungen.
                </Typography>
                <Typography variant="body1" paragraph>
                    Auch finden Sie in diesem Bereich Informationen zu Zinsentwicklungen und Mitteilungen von Noten- und Zentralbanken, welche signifikant Währungskurse beeinflussen.
                </Typography>
                <Typography variant="body1" paragraph>
                    Diese Informationen haben einen enormen Einfluss auf die Entwicklung von Währungen und Anleihen aber auch von in ausländischen Währungen denominierten Wertpapieren und anderen Anlageinstrumenten.
                </Typography>
                <Typography variant="body1" paragraph>
                    Die Nachrichten sind nach Datum und Uhrzeit, Land sowie auch nach Wichtigkeit sortiert. Wenn Sie eine Nachricht auswählen, so können Sie die detaillierten Informationen zu einer Headline betrachten.
                </Typography>
                <Typography variant="body1" paragraph>
                    Am unteren Ende der Auflistung finden Sie eine Kurz-Legende - sollten Sie Fragen zu einer dieser Bekanntmachungen haben oder ihren Auswirkungen haben, so können Sie uns gerne unter 001 604-260-0738 kontaktieren!
                </Typography>
            </Box>

            {/* Iframe Section */}
            <Box sx={{ width: '100%', maxWidth: '1200px', marginLeft: !isMobile && '15%'}}>
                <iframe
                    src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,37,17,72,22,39,14,48,10,35,6,43,21,38,12,36,26,110,5,4&calType=week&timeZone=16&lang=8"
                    width="100%"
                    height="900"
                    frameBorder="0"
                    allowTransparency="true"
                    marginWidth="0"
                    marginHeight="0"
                    style={{ border: '0' }}
                />
            </Box>
        </Box>
    );
};

export default EconomicCalendar;
