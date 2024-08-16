import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const LiveCryptoRates = () => {
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
                Live Kryptokurse
            </Typography>

            {/* Image Section */}
            <Box
                component="img"
                src="/images/crypto.jpg"
                alt="Crypto Image"
                sx={{
                    width: '100%',
                    maxHeight: !isMobile && '400px',
                    objectFit: 'cover'
                }}
            />

            {/* Text Section */}
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="h6" gutterBottom>
                    Kryptowährungen sind schon lange kein Nischenprodukt, sondern ein fester Bestandteil der globalen Ökonomie.
                </Typography>
                <Typography variant="body1" paragraph>
                    Bewegungen an Kryptomärkten beeinflussen heutzutage Aktienkurse, Währungen sowie Anleihen und haben darüber hinaus Auswirkungen auf Rohstoff- und Edelmetallpreise.
                </Typography>
                <Typography variant="body1" paragraph>
                    Aufgrund dieser Umstände bieten wir in diesem Bereich unserer Webseite Ihnen einen Überblick über die Entwicklung der wichtigsten Kryptowährungen.
                </Typography>
                <Typography variant="body1" paragraph>
                    Wenn Sie ein Krypto-Währungspaar auswählen, so öffnet sich in einem neuen Fenster ein Chart mit dem von Ihnen ausgewählten Währungspaar sowie dazugehörigen Informationen.
                </Typography>
                <Typography variant="body1" paragraph>
                    Sollten Sie Fragen zu Krypto-Währungspaaren und deren Entwicklungen haben, rufen Sie uns einfach unter 001 604-260-0738 an!
                </Typography>
            </Box>

            {/* Iframe Section */}
            <Box sx={{ width: '100%', maxWidth: '1200px',  height: '1000px' }}>
                <iframe
                    src="https://de.widgets.investing.com/crypto-currency-rates?theme=darkTheme&pairs=945629,997650,1001803,1010773,1010776,1058450,1070733,1216741,1141246,1141240,1141244,1062274,1072139,1208965,1194523,1169558,1176589,1162410,1163317,1197629,1060393,1070478,1198310,1070848,1209141,1212101,1058464,1072201,1060570,1195933,1156077,1208297,1199656,1175027"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowTransparency="true"
                    marginWidth="0"
                    marginHeight="0"
                    style={{ border: '0', overflow: 'hidden' }}
                />
            </Box>
        </Box>
    );
};

export default LiveCryptoRates;
