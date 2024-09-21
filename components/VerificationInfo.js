import React from 'react';
import {Box, Typography, Grid, CardMedia, useTheme, useMediaQuery} from '@mui/material';

const VerificationInfo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    return (
        <Box>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}
            >
                Identifikationsdokumente
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <CardMedia
                        component="img"
                        height="400"
                        image="/images/VerificationInfo.jpg" // Replace with the path to your image
                        alt="VerificationInfo"
                        objectFit="cover"
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography  paragraph>
                        Die Verifizierung Ihrer Ausweisdokumente, E-Mail-Adresse und Telefonnummer ist entscheidend, um die Sicherheit und Integrität Ihres Kontos zu gewährleisten.
                        Sie hilft, Identitätsdiebstahl zu verhindern, stellt die Einhaltung von Vorschriften sicher und schafft eine sichere Umgebung für alle Nutzer.
                    </Typography>
                    <Typography  paragraph>
                        Durch die Verifizierung Ihrer Informationen schützen Sie nicht nur Ihr eigenes Konto, sondern tragen auch zu einem sichereren digitalen Ökosystem bei. Dieser Prozess
                        ist schnell und einfach und verringert das Risiko von Betrug und unbefugtem Zugriff erheblich.
                    </Typography>
                    <Typography  paragraph>
                        Bitte nehmen Sie sich einen Moment Zeit, um Ihr Profil zu vervollständigen, indem Sie Ihre E-Mail-Adresse, Telefonnummer verifizieren und die erforderlichen Dokumente hochladen. Dadurch werden
                        alle Funktionen unserer Plattform freigeschaltet und Sie können eine reibungslose Erfahrung genießen.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VerificationInfo;
