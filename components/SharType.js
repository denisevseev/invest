import React from 'react';
import { Box, Typography, Link, useTheme, useMediaQuery, Divider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from './../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

const ShareType = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en; // Определяем язык в зависимости от состояния

    return (
        <Box sx={{ width: isMobile ? '100%' : '80%', ml: isMobile ? 1 : 28, mt: 12, textAlign: 'center' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    color: 'black',
                }}
            >
                {language.shareTypeInvestorsContent?.title}
            </Typography>
            <Divider />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/sharetype.jpg)', // Укажите путь к фоновому изображению
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                }}
            >
                <Link
                    href="https://victorum-trade.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none' }}
                >
                    <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{ width: isMobile ? '80%' : '132%', opacity: 0 }} />
                </Link>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                {language.shareTypeInvestorsContent.paragraphs.map((paragraph, index) => (
                    <Typography key={index} variant="body1" paragraph >
                        {paragraph}
                    </Typography>
                ))}
                <Typography variant="body1" paragraph >
                    {language.shareTypeInvestorsContent.additionalContact}{' '}
                    <Link href="tel:+16042600738" sx={{ textDecoration: 'none' }}>
                        +1 604-260-0738
                    </Link>
                    {' '}
                    {language.shareTypeInvestorsContent.or}{' '}
                    <Link href="mailto:contact@victorum-capital.com" sx={{ textDecoration: 'none' }}>
                        contact@victorum-capital.com
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default observer(ShareType);
