import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery } from '@mui/material';
import store from './../stores/userStore';
import GeneratePDFButton from "./RiskPdf";

const MyAgreements = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    let user = store.user;

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

            if (result.path && typeof window !== 'undefined') { // Проверяем, что код выполняется на клиенте
                const link = document.createElement('a');
                link.href = result.path;
                link.download = 'document.pdf'; // Устанавливаем имя файла для скачивания
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    };

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Meine Verträge
            </Typography>
            <CardMedia
                component="img"
                height="400"
                image="/images/handleshake.jpg" // Replace with the path to your image
                alt="My agreements"
                sx={{ mb: 4 }}
            />
            <Typography variant="body1" align="center" sx={{ mb: 5 }}>
                Auf dieser Seite finden Sie alle rechtlichen Vereinbarungen, die Sie im Laufe Ihrer Nutzung dieser Plattform unterzeichnet haben. Diese Dokumente umfassen allgemeine Nutzungsbedingungen, Datenschutzerklärungen und spezifische Vereinbarungen für verschiedene Dienstleistungen. Es ist wichtig, dass Sie eine Kopie dieser Dokumente für Ihre Unterlagen aufbewahren. Falls Sie eine dieser Vereinbarungen erneut einsehen oder herunterladen möchten, können Sie dies ganz einfach über die untenstehenden Links tun.
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
                                <Typography gutterBottom variant="h5" component="div">
                                    {item === 1 ? 'Zeichnung von SEC-registrierten\n' +
                                        'vorbörslichen Wertpapieren der Victorum Capital Inc.' : 'Chancen und Risiken bei Investitionen in vorbörsliche Aktien der Victorum Capital Inc.'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item === 1 ? 'Die Emittierung, die Registrierung, die Regulierung sowie der Verkauf\n' +
                                        'der Wertpapiere der Victorum Capital Inc. erfolgt entsprechend den\n' +
                                        'Richtlinien der US-Börsenaufsicht SEC sowie der deutschen BaFin.': 'Ein umfassender Leitfaden, der die wesentlichen Chancen und Risiken beleuchtet, die bei einer Kapitalanlage in vorbörsliche Aktien der Victorum Capital Inc. zu berücksichtigen sind.' }
                                </Typography>
                                {item === 1 ? <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    onClick={()=>handleGenerateDoc(item)}
                                >
                                    PDF herunterladen
                                </Button> : <GeneratePDFButton/>}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyAgreements;
