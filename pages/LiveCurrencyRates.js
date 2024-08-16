import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const LiveCurrencyRates = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                Live Currency Rates
            </Typography>

            {/* Image Section */}
            <Box
                component="img"
                src="/images/lcr.jpg"
                alt="Live Currency Rates Image"
                sx={{
                    width: '100%',
                    maxHeight: !isMobile && '400px',
                    objectFit: 'cover'
                }}
            />

            {/* Text Section */}
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="h6" gutterBottom>
                    Das Geschäft der Victorum Capital ist global und geht über diverse Landesgrenzen, viele Zeitzonen und in unterschiedlichsten Währungen.
                </Typography>
                <Typography variant="body1" paragraph>
                    Auch gibt es internationale Investoren, die sich in Ihrer Landeswährung bei Victorum Capital engagieren - und genau deswegen bieten wir in diesem Bereich unserer Webseite Ihnen einen Überblick über die Entwicklung der wichtigsten Währungspaare weltweit.
                </Typography>
                <Typography variant="body1" paragraph>
                    Wenn Sie ein Währungspaar auswählen, so öffnet sich in einem neuen Fenster ein Chart mit dem von Ihnen ausgewählten Währungspaar.
                </Typography>
                <Typography variant="body1" paragraph>
                    Sollten Sie Fragen zu Fremdwährungsentwicklungen haben oder Beratung zu Hedgingmöglichkeiten zur Risikominimierung haben, rufen Sie uns einfach unter 001 604-260-0738 an!
                </Typography>
            </Box>

            {/* Iframe Section */}
            <Box sx={{ width: '100%', maxWidth: '1200px',  height: '1000px' }}>
                <iframe
                    src="https://de.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,2,4,7,5,8,6,9,10,49,11,13,16,47,51,58,50,53,15,12,52,48,55,42,155,43,54,9275,9276,9309,9310,9277,9278,9279,9280,9282,9283,9325,9284,9285,9287,9326,9312,1467,9292"
                    width="100%"
                    height="100%"
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

export default LiveCurrencyRates;
