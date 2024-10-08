import React from 'react';
import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from '../stores/userStore';
import en from '../public/lang/en.json';
import de from '../public/lang/de.json';

const RegulationAuthority = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;
    const { regulationAuthority } = language;

    return (
        <Box sx={{ width: isMobile ? '100%' : '75%', ml: isMobile ? 1 : 35, mt: 12, textAlign: 'center' }}>

        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                {regulationAuthority.title}
            </Typography>
            <Box component="img" src="https://smfanton.ru/wp-content/uploads/2019/07/shapka.jpg" alt="U.S. Securities and Exchange Commission" sx={{ width: '100%', height: isMobile ? 'auto' : '30rem' }} />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                {regulationAuthority.content.map((paragraph, index) => (
                    <Typography key={index} variant="body1" paragraph >
                        {paragraph}
                    </Typography>
                ))}
                <Box mt={2}>
                    <Typography variant="body1" paragraph >
                        <strong>{regulationAuthority.contact.name}</strong><br />
                        {regulationAuthority.contact.address}<br />
                        {regulationAuthority.contact.city}<br />
                        {regulationAuthority.contact.phone}<br />
                        {regulationAuthority.contact.fax}<br />
                        {regulationAuthority.contact.web}: <Link href={regulationAuthority.contact.web} target="_blank" rel="noopener">{regulationAuthority.contact.web}</Link>
                    </Typography>
                    <Typography variant="body1" paragraph >
                        {regulationAuthority.contact.companyLinkText}: <Link href={regulationAuthority.contact.companyLink} target="_blank" rel="noopener">{regulationAuthority.contact.companyLink}</Link>
                    </Typography>
                    <Typography variant="body1" sx={{  marginTop: '1rem' }}>
                        {regulationAuthority.contact.additionalContactInfo}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default observer(RegulationAuthority);
