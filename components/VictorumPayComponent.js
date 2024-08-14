import React from 'react';
import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import store from './../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

// Стилизация компонента изображения
const Image = styled('img')({
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
});

const VictorumPayComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;
    const { victorumPay } = language;

    return (
        <Box sx={{ width: isMobile ? '100%' : '80%', mt: 12, ml: 30, textAlign: 'center' }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    // color: theme.palette.primary.main,
                    // textShadow: `0 4px 6px ${theme.palette.text.primary}`,
                }}
            >
                {victorumPay.title}
            </Typography>
            <Image sx={{maxWidth: '100%', maxHeight: '28rem' }} src="/images/VicPay.jpg" alt="Victorum Pay" />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', margin: '0 auto' }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    {victorumPay.description1}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        fontSize: isMobile ? '1.6rem' : '2rem',
                    }}
                >
                    {victorumPay.whyChooseTitle}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    {victorumPay.reason1}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    <strong>{victorumPay.reason2.split(':')[0]}:</strong> {victorumPay.reason2.split(':')[1]}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    <strong>{victorumPay.reason3.split(':')[0]}:</strong> {victorumPay.reason3.split(':')[1]}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    <strong>{victorumPay.reason4.split(':')[0]}:</strong> {victorumPay.reason4.split(':')[1]}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    <strong>{victorumPay.reason5.split(':')[0]}:</strong> {victorumPay.reason5.split(':')[1]}
                </Typography>
                <Box textAlign="center" mt={2}>
                    <Link href="https://vicpayments.com/" target="_blank" rel="noopener" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                        <Typography variant="body1" sx={{ fontSize: isMobile ? '22px' : '21px', fontWeight: 'bold', color: theme.palette.primary.main }}>
                            {victorumPay.discoverMore}
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default observer(VictorumPayComponent);
