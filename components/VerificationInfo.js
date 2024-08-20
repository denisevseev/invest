import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const VerificationInfo = () => {
    return (
        <Box sx={{ mt: 4, p: 2, ml:20, borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            {/*<Typography variant="h4" gutterBottom align="center">*/}
            {/*    Warum Verifizierung wichtig ist*/}
            {/*</Typography>*/}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src="https://www.evidentid.com/wp-content/uploads/2019/01/1.-Instructional-Diagram.png" alt="Dokumentenverifizierung" style={{ width: '100%', borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        Die Verifizierung Ihrer Ausweisdokumente, E-Mail-Adresse und Telefonnummer ist entscheidend, um die Sicherheit und Integrität Ihres Kontos zu gewährleisten.
                        Sie hilft, Identitätsdiebstahl zu verhindern, stellt die Einhaltung von Vorschriften sicher und schafft eine sichere Umgebung für alle Nutzer.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Durch die Verifizierung Ihrer Informationen schützen Sie nicht nur Ihr eigenes Konto, sondern tragen auch zu einem sichereren digitalen Ökosystem bei. Dieser Prozess
                        ist schnell und einfach und verringert das Risiko von Betrug und unbefugtem Zugriff erheblich.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Bitte nehmen Sie sich einen Moment Zeit, um Ihr Profil zu vervollständigen, indem Sie Ihre E-Mail-Adresse, Telefonnummer verifizieren und die erforderlichen Dokumente hochladen. Dadurch werden
                        alle Funktionen unserer Plattform freigeschaltet und Sie können eine reibungslose Erfahrung genießen.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VerificationInfo;
