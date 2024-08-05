// VerificationOverview.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';

const VerificationOverview = () => {
    return (
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '8px' }}>
            <Grid container spacing={4} sx={{ mt: 0 }}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center', wordBreak: 'break-word' }}>
                        <EmailIcon sx={{ fontSize: 80, color: '#3f51b5' }} />
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            E-Mail-Verifizierung
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Eine bestätigte E-Mail-Adresse ermöglicht es uns, sicherzustellen, dass wichtige Benachrichtigungen Sie erreichen und Ihr Konto vor unbefugtem Zugriff geschützt ist.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center', wordBreak: 'break-word' }}>
                        <PhoneIcon sx={{ fontSize: 80, color: '#3f51b5' }} />
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            Telefonverifizierung
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Die Verifizierung Ihrer Telefonnummer fügt Ihrem Konto eine zusätzliche Sicherheitsebene hinzu und stellt sicher, dass nur Sie Zugriff haben.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center', wordBreak: 'break-word' }}>
                        <SecurityIcon sx={{ fontSize: 80, color: '#3f51b5' }} />
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            Dokumentenverifizierung
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Die Verifizierung Ihrer Dokumente ist notwendig, um sicherzustellen, dass Ihre Identität korrekt und authentisch ist, was Betrug und Missbrauch vorbeugt.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VerificationOverview;
