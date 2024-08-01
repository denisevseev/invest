import React from 'react';
import { Box, Typography, Link, Paper, useTheme, useMediaQuery } from '@mui/material';

const RegulationAuthority = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ width: isMobile ? '100%' : '80%', ml: isMobile ? 1 :  30, mt: 12,   textAlign: 'center' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                Stabilität und Vertrauen: Die U.S. Securities and Exchange Commission (SEC) als Hüter der Finanzmärkte
            </Typography>
            <img src="https://smfanton.ru/wp-content/uploads/2019/07/shapka.jpg" alt="U.S. Securities and Exchange Commission" style={{ width: isMobile ? '100%' : '60%', height: 'auto' }} />
            <Typography elevation={3} sx={{ padding: { xs: '10px', sm: '20px', textAlign: 'left' }, maxWidth: '100%' }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Die US-amerikanische Börsenaufsicht SEC (Securities and Exchange Commission) beaufsichtigt die Finanzmärkte in den USA und ist eine der ältesten Organisationen zur Überwachung der Aktivitäten von Finanzdienstleistern, Banken und Unternehmen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Ihr Hauptziel ist es, ein funktionsfähiges, zuverlässiges und stabiles Finanzsystem zu gewährleisten und Bankkunden, Versicherte und Anleger zu schützen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Die SEC (Securities and Exchange Commission) ist eine der wichtigsten staatlichen Aufsichtsbehörden in den USA. Sie ist für die Regulierung des Wertpapiermarktes verantwortlich, einschließlich des Handels mit Aktien, ihrer Emission, der Börsen, Makler, der Handelsoperationen von Privatpersonen und Investmentgesellschaften. Die SEC überwacht auch Fusionen und Übernahmen von Unternehmen. Dies bedeutet: Wenn ein Vermögenswert an den US-Börsen gehandelt wird oder einem amerikanischen Makler zugänglich ist, unterliegt er automatisch den von der SEC festgelegten Regeln. Das Hauptziel dieser Organisation besteht darin, Transparenz in Transaktionen zu gewährleisten und betrügerische Aktivitäten zu bekämpfen.
                </Typography>
                <Box mt={2}>
                    <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                        <strong>U.S. Securities and Exchange Commission</strong><br />
                        100 F Street, NE Washington<br />
                        DC 20549-0213<br />
                        Telephone: (800) 732-0330<br />
                        Fax: (202) 772-9295<br />
                        Web: <Link href="https://www.sec.gov" target="_blank" rel="noopener">https://www.sec.gov</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                        Link zu Victorum Capital Inc. bei der SEC: <Link href="https://www.sec.gov/Archives/edgar/data/0001871600/000187160021000001/xslFormDX01/primary_doc.xml" target="_blank" rel="noopener">SEC Listing</Link>
                    </Typography>
                </Box>
            </Typography>
        </Box>
    );
};

export default RegulationAuthority;
