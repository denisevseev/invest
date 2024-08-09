import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery } from '@mui/material';

const MyAgreements = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Meine Vereinbarungen
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 5 }}>
                Auf dieser Seite finden Sie alle rechtlichen Vereinbarungen, die Sie im Laufe Ihrer Nutzung dieser Plattform unterzeichnet haben. Diese Dokumente umfassen allgemeine Nutzungsbedingungen, Datenschutzerklärungen und spezifische Vereinbarungen für verschiedene Dienstleistungen. Es ist wichtig, dass Sie eine Kopie dieser Dokumente für Ihre Unterlagen aufbewahren. Falls Sie eine dieser Vereinbarungen erneut einsehen oder herunterladen möchten, können Sie dies ganz einfach über die untenstehenden Links tun.
            </Typography>
            <Grid container spacing={3}>
                {[1, 2, 3].map((item) => (
                    <Grid item xs={12} md={4} key={item}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/path/to/pdf-icon.jpg" // Ersetzen Sie dies durch den Pfad zu Ihrem Bild
                                alt="PDF Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Vereinbarung {item}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Dies ist eine detaillierte Beschreibung der Vereinbarung, die Sie unterzeichnet haben. Sie können die vollständige PDF-Datei herunterladen, indem Sie auf die Schaltfläche unten klicken.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    href="#"
                                    target="_blank"
                                >
                                    PDF herunterladen
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyAgreements;
