import React from 'react';
import {Grid, Typography, Box, Link, useTheme, useMediaQuery} from '@mui/material';
import { styled } from '@mui/system';

const ContactContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(12),
    marginLeft:  '10%',
    backgroundImage: 'url(/images/contact.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // Adds a black overlay with 50% opacity
        zIndex: 1,
    },
    '& > *': {
        position: 'relative',
        zIndex: 2, // Ensures the content appears above the overlay
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

const ContactItem = ({ label, value, isLink }) => (
    <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {label}
        </Typography>
        {isLink ? (
            <Link href={value.startsWith('mailto:') ? value : `tel:${value}`} sx={{ color: 'primary.main' }}>
                {value.replace('mailto:', '')}
            </Link>
        ) : (
            <Typography variant="body1">{value}</Typography>
        )}
    </Box>
);

const ContactDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    return (
        <ContactContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h5" sx={{ marginBottom: 3, color: 'black' }}>
                        Victorum Capital Inc.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'black' }}>2102-58 Keefer Place</Typography>
                    <Typography variant="body1" sx={{ color: 'black' }}>Vancouver, BC V6B 0B6, Canada</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ContactItem label="Legal representative:" value="CEO Osbert Doehl" />
                    <ContactItem label="Telephone:" value="+1 604-260-0738" isLink />
                    <ContactItem label="Compliance:" value="mailto:compliance@victorum-capital.com" isLink />
                    <ContactItem label="Contacts for the media:" value="mailto:press@victorum-capital.com" isLink />
                    <ContactItem label="Administrative management:" value="mailto:administration@victorum-capital.com" isLink />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ContactItem label="Registered in British Columbia, registration number:" value="790478002BC0001" />
                    <ContactItem label="Information about Victorum Capital Inc. Securities" value="STYLE: COMMON CLASS A RESTRICTED SHARES" />
                    <ContactItem label="ISIN:" value="CA92642D1024" />
                    <ContactItem label="CUSIP:" value="92642D102" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ContactItem label="Transfer Agent" value="Integral Transfer Agency Inc." />
                    <Typography variant="body1" sx={{ color: 'black' }}>100 Queen St E</Typography>
                    <Typography variant="body1" sx={{ color: 'black' }}>Toronto, ON M5C 1S6, Canada</Typography>
                    <Link href="http://www.integraltransfer.com" target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>
                        www.integraltransfer.com
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ContactItem label="Competent regulatory authority" value="U.S. Securities and Exchange Commission" />
                    <Typography variant="body1" sx={{ color: 'black' }}>100 F Street, NE Washington</Typography>
                    <Typography variant="body1" sx={{ color: 'black' }}>DC 20549-0213</Typography>
                    <ContactItem label="Telephone:" value="(800) 732-0330" isLink />
                    <Typography variant="body1" sx={{ color: 'black' }}>Fax: (202) 772-9295</Typography>
                    <Link href="http://www.sec.gov" target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>
                        www.sec.gov
                    </Link>
                </Grid>
            </Grid>
        </ContactContainer>
    );
};

export default ContactDetails;
