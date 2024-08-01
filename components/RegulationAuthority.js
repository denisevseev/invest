import React from 'react';
import { Box, Typography, Link, Paper, useTheme, useMediaQuery } from '@mui/material';

const RegulationAuthority = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: { xs: '2rem', sm: '5rem', md: '4rem', lg: '10rem' }, marginTop: isMobile && '2rem' }}>
            <Paper elevation={3} sx={{ padding: { xs: '10px', sm: '20px' }, maxWidth: { xs: '100%', sm: '600px' }, width: '100%' }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : 'inherit' }}>
                    Die US-amerikanische Börsenaufsicht SEC (Securities and Exchange Commission) beaufsichtigt die Finanzmärkte in den USA und ist eine der ältesten Organisationen zur Überwachung der Aktivitäten von Finanzdienstleistern, Banken und Unternehmen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : 'inherit' }}>
                    Ihr Hauptziel ist es, ein funktionsfähiges, zuverlässiges und stabiles Finanzsystem zu gewährleisten und Bankkunden, Versicherte und Anleger zu schützen.
                </Typography>
                <Box mt={2}>
                    <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : 'inherit' }}>
                        <strong>U.S. Securities and Exchange Commission</strong><br />
                        100 F Street, NE Washington<br />
                        DC 20549-0213<br />
                        Telephone: (800) 732-0330<br />
                        Fax: (202) 772-9295<br />
                        Web: <Link href="https://www.sec.gov" target="_blank" rel="noopener">https://www.sec.gov</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: isMobile ? '22px' : 'inherit' }}>
                        Link zu Victorum Capital Inc. bei der SEC: <Link href="https://www.sec.gov/Archives/edgar/data/0001871600/000187160021000001/xslFormDX01/primary_doc.xml" target="_blank" rel="noopener">SEC Listing</Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default RegulationAuthority;
