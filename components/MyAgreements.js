import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery } from '@mui/material';
import store from './../stores/userStore';
import GeneratePDFButton from "./RiskPdf";
import { observer } from "mobx-react-lite";

const MyAgreements = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    let user = store.user;
    const lang = store.lang;

    const handleGenerateDoc = async (item) => {
        if (item === 1) {
            const response = await fetch('/api/generate-doc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user
                }),
            });

            const result = await response.json();
            console.log(result);

            if (result.path && typeof window !== 'undefined') { // Check if on the client-side
                const link = document.createElement('a');
                link.href = result.path;
                link.download = lang === 'de' ? '2024_VICCAPITAL_Zeichnung_Wertpap.vorbörslich.pdf' : '2024_VICCAPITAL_ShareSubscription_preIPO';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    };

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                {lang === 'de' ? 'Meine Verträge' : 'My Agreements'}
            </Typography>
            <CardMedia
                component="img"
                height="400"
                image="/images/handleshake.jpg" // Replace with the path to your image
                alt="My agreements"
                sx={{ mb: 4 }}
            />
            <Typography  align="center" sx={{ mb: 5 }}>
                {lang === 'de'
                    ? 'Auf dieser Seite finden Sie alle rechtlichen Vereinbarungen, die Sie im Laufe Ihrer Nutzung dieser Plattform unterzeichnet haben. Diese Dokumente umfassen allgemeine Nutzungsbedingungen, Datenschutzerklärungen und spezifische Vereinbarungen für verschiedene Dienstleistungen. Es ist wichtig, dass Sie eine Kopie dieser Dokumente für Ihre Unterlagen aufbewahren. Falls Sie eine dieser Vereinbarungen erneut einsehen oder herunterladen möchten, können Sie dies ganz einfach über die untenstehenden Links tun.'
                    : 'On this page, you will find all the legal agreements you have signed during your use of this platform. These documents include general terms and conditions, privacy policies, and specific agreements for various services. It is important that you keep a copy of these documents for your records. If you would like to review or download any of these agreements again, you can easily do so via the links below.'
                }
            </Typography>
            <Grid container spacing={3}>
                {[1, 2].map((item) => (
                    <Grid item xs={12} md={6} key={item}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item === 1 ? "/pdf/first.jpg" : "/pdf/second.jpg"}
                                alt="PDF Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom  component="div">
                                    {item === 1
                                        ? lang === 'de'
                                            ? 'Zeichnung von SEC-registrierten vorbörslichen Wertpapieren der Victorum Capital Inc.'
                                            : 'Subscription of SEC-Registered Pre-IPO Securities of Victorum Capital Inc.'
                                        : lang === 'de'
                                            ? 'Chancen und Risiken bei Investitionen in vorbörsliche Aktien der Victorum Capital Inc.'
                                            : 'Opportunities and Risks of Investing in Pre-IPO Shares of Victorum Capital Inc.'
                                    }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item === 1
                                        ? lang === 'de'
                                            ? 'Die Emittierung, die Registrierung, die Regulierung sowie der Verkauf der Wertpapiere der Victorum Capital Inc. erfolgt entsprechend den Richtlinien der US-Börsenaufsicht SEC sowie der deutschen BaFin.'
                                            : 'The issuance, registration, regulation, and sale of Victorum Capital Inc. securities are carried out in accordance with the guidelines of the U.S. SEC and the German BaFin.'
                                        : lang === 'de'
                                            ? 'Ein umfassender Leitfaden, der die wesentlichen Chancen und Risiken beleuchtet, die bei einer Kapitalanlage in vorbörsliche Aktien der Victorum Capital Inc. zu berücksichtigen sind.'
                                            : 'A comprehensive guide outlining the key opportunities and risks to consider when investing in pre-IPO shares of Victorum Capital Inc.'
                                    }
                                </Typography>
                                {item === 1 ?
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 2 }}
                                        onClick={() => handleGenerateDoc(item)}
                                    >
                                        {lang === 'de' ? 'PDF herunterladen' : 'Download PDF'}
                                    </Button>
                                    : <GeneratePDFButton />}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default observer(MyAgreements);
