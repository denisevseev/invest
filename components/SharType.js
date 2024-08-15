import React from 'react';
import { Box, Typography, Link, useTheme, useMediaQuery, Divider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from './../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

const ShareType = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const language = store.lang === 'de' ? de : en;

    return (
        <Box sx={{ width: isMobile ? '100%' : '80%', ml: isMobile ? 1 : 28, mt: 12, textAlign: 'center' }}>
            <Typography
                variant="h4"
                align={isMobile ? 'center' : 'center'}
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'black',
                }}
            >
                Share Type & Investors
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
                    p: 3, // Отступы внутри контейнера
                }}
            >
                <Link
                    href="https://victorum-trade.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}
                >
                    <Box component="img" src="/images/trade.png" alt="Victorum Trade" sx={{ width: isMobile ? '80%' : '132%', opacity: 0 }} />
                </Link>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    In diesem Bereich finden Sie alle relevanten Informationen zu den Wertpapieren der Victorum Capital Inc.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Die Transaktion der Wertpapiere der Victorum Capital Inc. unterliegen unterschiedlichen Jurisdiktionen mit unterschiedlichen Regulierungen und Registrierungsprozessen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Die Emittierung, die Registrierung sowie die Regulierung der Wertpapiere der Victorum Capital Inc. erfolgt nach US-Börsenrecht konform der Rule 506 der Regulation D der US-Börsenaufsicht SEC (United States Securities and Exchange Commission).
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Der Verkauf der Wertpapiere in Deutschland erfolgt gemäß der BaFin (Bundesanstalt für Finanzdienstleistungsaufsicht) Richtlinie Art.1 Abs. 4 lit. b) Prospekt-VO der EU-Prospektverordnung.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Alle auf die Wertpapiere entfallenden Ausschüttungen und Rechte stehen ab dem Zeitpunkt der Übertragung ausschließlich dem Käufer der Wertpapiere oder der vom Käufer ausdrücklich angegebenen zu übertragenden Person/en und/oder Gesellschaft zu.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Die Parteien sind sich einig, dass das Eigentum der Wertpapiere von der Gesellschaft auf den Käufer übergeht und dass es sich bei diesen Wertpapieren um nennwertlose Common Restricted Class A Shares mit vollem Stimmrecht und Dividendenbezugsberechtigung handelt.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Der Übertrag geschieht, basierend auf kanadischem Recht, auf elektronischem Weg über die{' '}
                    <Link href="https://www.integraltransfer.com/" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}>
                        Integral Transfer Agency Shareholder Services Inc.
                    </Link>, 100 Queen St E, Suite 203, Toronto, ON, M5C 1S6, Canada, Phone: {' '}
                    <Link href="tel:+14166238028" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}>
                        +1 416-623‐8028
                    </Link>{' '}
                    / Fax: {' '}
                    <Link href="tel:+16477943332" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}>
                        +1 647-794‐3332
                    </Link>,{' '}
                    <Link href="mailto:info@integraltransfer.com" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}>
                        info@integraltransfer.com
                    </Link>
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    §5 Möchte der Käufer seine erworbenen Wertpapiere vor dem Börsengang der Victorum Capital Inc. veräußern, so ist der Aktionär beim Verkauf an einen Dritten angehalten, dafür Sorge zu tragen, dass die Wertpapiere tatsächlich an den Erwerber und damit den neuen Aktionär übertragen werden.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Der Käufer hat in diesem Fall eine besondere Sorge dafür zu tragen, dass auf den Erwerber auch eventuell vorhandene Stimm- und Dividendenrechte, entsprechend den gesetzlichen Richtlinien des Landes in dem der neue Käufer ansässig ist, übertragen werden.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Der Käufer haftet gegenüber der Victorum Capital Inc. und/oder dem neuen Käufer der Wertpapiere für entstandene Schäden, die durch Verstöße gegen einen dieser Paragraphen zustande kommen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Sie haben noch Fragen zu Ihren Wertpapieren? Es gibt Unklarheiten oder Hürden mit Korrespondenz in englischer Sprache?
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Gar kein Problem - wir stehen Ihnen auch auf Deutsch täglich zwischen 10 und 22h Berlin Zeit unter{' '}
                    <Link href="tel:+16042600738" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}>
                        +1 604-260-0738
                    </Link>{' '}
                    zur Verfügung.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '22px' : '21px' }}>
                    Natürlich können Sie uns Ihre Fragen auch schriftlich per E-Mail an{' '}
                    <Link href="mailto:contact@victorum-capital.com" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}>
                        contact@victorum-capital.com
                    </Link>{' '}
                    senden - wir freuen uns auf Ihre Nachricht!
                </Typography>
            </Box>
        </Box>
    );
};

export default observer(ShareType);
