import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, Paper, Grid, Slider, Button, useTheme, useMediaQuery, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ButtonBecome from "./ButtonBecome";
import store from "./../../stores/userStore";
import RiskAcceptanceModal from "../RiskAcceptance/RiskAcceptanceModal"; // Импортируйте глобальное состояние

const InvestmentCalculator = () => {
    console.log("InvestmentCalculator");
    const [step, setStep] = useState(0); // For controlling the steps
    const [investmentAmount, setInvestmentAmount] = useState(store.investmentAmount || 2500); // Default minimum investment
    const [shareholdingPeriod, setShareholdingPeriod] = useState(store.shareholdingPeriod || 1); // Default minimum holding period in months
    const [distributedDividend, setDistributedDividend] = useState(0); // Default dividend, will be set dynamically
    const [result, setResult] = useState(null);
    const [showResults, setShowResults] = useState(false); // For displaying results
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [currencyRates, setCurrencyRates] = useState({
        EUR: 0.7,
        RUB: 55.0,
        NAIRA: 450.0
    });
    const router = useRouter();

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/CAD');
                const data = await response.json();
                setCurrencyRates({
                    EUR: data.rates.EUR,
                    RUB: data.rates.RUB,
                    NAIRA: data.rates.NGN,
                });
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };

        fetchCurrencyRates();
    }, []);

    useEffect(() => {
        // Determine dividend percentage based on the amount of shares
        let percentage;
        const amountOfShares = investmentAmount - 75;
        if (amountOfShares <= 100000) {
            percentage = 5.6;
        } else if (amountOfShares <= 250000) {
            percentage = 7.3;
        } else if (amountOfShares <= 500000) {
            percentage = 8.2;
        } else {
            percentage = 9.8;
        }
        setDistributedDividend(percentage);

        if (investmentAmount && shareholdingPeriod) {
            const period = shareholdingPeriod * 0.75;
            const dividend = distributedDividend + period;
            const totalDividend = (amountOfShares * (dividend / 100)) / 12;
            const totalAmount = parseFloat(amountOfShares) + totalDividend;
            setResult(totalAmount.toFixed(2));
        }
    }, [investmentAmount, shareholdingPeriod]);

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleInvestmentChange = (e, newValue) => {
        setInvestmentAmount(newValue);
        store.investmentAmount = newValue; // Сохраняем сумму инвестиций в глобальном состоянии
        setShowResults(true);
    };

    const handlePeriodChange = (e, newValue) => {
        setShareholdingPeriod(newValue);
        store.shareholdingPeriod = newValue; // Сохраняем период владения в глобальном состоянии
        setShowResults(true);
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <Modal open={true} onClose={() => {}} closeAfterTransition>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    overflowY: 'auto',
                }}
            >
                <RiskAcceptanceModal/>
                <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {step === 0 && (
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <img src="/images/calc/1.jpg" alt="Einführung" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
                                        Wir freuen uns sehr über Ihr Interesse an Victorum und unseren Aktivitäten.
                                    </Typography>
                                    <Typography variant="body1" mt={2} sx={{ fontSize: '1.5rem' }}>
                                        Bitte beachten Sie, dass wir derzeit ein hohes Anfragevolumen haben. Diese Situation in Kombination mit einem begrenzten Kontingent an Wertpapieren für externe Investoren führt dazu, dass leider nicht jeder interessierte Investor Wertpapiere erhalten kann.
                                    </Typography>
                                    <Typography variant="body1" mt={2} sx={{ fontSize: '1.5rem' }}>
                                        Wir drücken Ihnen die Daumen und stehen für Ihre Fragen unter der Nummer <strong>+1 604-260-0738</strong> oder per E-Mail an <strong>contact@victorum-capital.com</strong> zur Verfügung!
                                    </Typography>
                                    <Typography variant="body1" mt={2} sx={{ fontSize: '1.5rem' }}>
                                        Mit freundlichen Grüßen, Ihr Victorum Support-Team
                                    </Typography>
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="outlined" color="primary" onClick={handleNextStep}>
                                            Weiter
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {step === 1 && (
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <img src="/images/calc/2.jpg" alt="Kurzanleitung" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                        Kurzanleitung
                                    </Typography>
                                    <Typography variant="body1" align="center" sx={{ fontSize: '1.5rem' }}>
                                        Sind Sie ein qualifizierter, risikofreudiger und gewinnorientierter Investor? <br />
                                        Suchen Sie dynamische Investitionsmöglichkeiten außerhalb der Eurozone? <br />
                                        Verbinden Sie Kanada nicht nur mit Ahornsirup, sondern auch mit einer der stabilsten und am schnellsten wachsenden Volkswirtschaften der Welt? <br />
                                        Dann sind Sie hier richtig, und wir hoffen, dass Sie bei der Verteilung der Wertpapiere berücksichtigt werden!
                                    </Typography>
                                    <Typography variant="body1" align="center" mt={2} sx={{ fontSize: '1.5rem' }}>
                                        In drei bis vier Minuten und in drei einfachen Schritten können Sie die Verteilung und den Kauf von Wertpapieren ganz einfach und unkompliziert erledigen.
                                    </Typography>
                                    <Typography variant="body1" align="center" mt={2} sx={{ fontSize: '1.5rem' }}>
                                        Sollten Sie Fragen oder technische Schwierigkeiten haben, zögern Sie nicht, uns zu kontaktieren. <br />
                                        Unser Team ist täglich von 9:00 bis 18:00 Uhr erreichbar.
                                    </Typography>
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="outlined" color="primary" onClick={handleNextStep}>
                                            Weiter
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {step === 2 && (
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <img src="/images/calc/3.jpg" alt="Schritt 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                        Schritt 1: Wählen Sie die Anzahl der Wertpapiere
                                    </Typography>
                                    <Box>
                                        <Grid  container spacing={2} direction="column">
                                            <Grid item xs={12}>
                                                <Typography id="investment-amount-slider" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                                    Investitionssumme (CAD)
                                                </Typography>
                                                <Slider
                                                    value={investmentAmount}
                                                    onChange={handleInvestmentChange}
                                                    aria-labelledby="investment-amount-slider"
                                                    valueLabelDisplay="auto"
                                                    step={500}
                                                    min={2500}
                                                    max={1000000}
                                                    sx={{ marginBottom: '10px' }}
                                                />
                                                <TextField
                                                    value={investmentAmount}
                                                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                                                    fullWidth
                                                    margin="dense"
                                                    size="small"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Die Anzahl Ihrer Aktien einschließlich unserer Provision von 75 (CAD)"
                                                    type="number"
                                                    value={investmentAmount - 75} // Ensuring the value is 75 less than the investment amount
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    margin="dense"
                                                    size="small"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Erwartete ausgeschüttete Dividendenrendite (%)"
                                                    type="number"
                                                    value={distributedDividend}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    margin="dense"
                                                    size="small"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {showResults && result && (
                                        <Box mt={2} display="flex" justifyContent="center">
                                            <Box display="flex" flexDirection="column" alignItems="left">
                                                <Typography
                                                    variant="h6"
                                                    align="left"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: '1.5rem',
                                                    }}
                                                >
                                                    CAD: {formatNumber(result)}
                                                </Typography>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        EUR: {formatNumber((result * currencyRates.EUR).toFixed(2))}
                                                    </Typography>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        RUB: {formatNumber((result * currencyRates.RUB).toFixed(2))}
                                                    </Typography>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1, delay: 0.4 }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        NAIRA: {formatNumber((result * currencyRates.NAIRA).toFixed(2))}
                                                    </Typography>
                                                </motion.div>
                                            </Box>
                                        </Box>
                                    )}
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="outlined" color="primary" onClick={handleNextStep}>
                                            Weiter
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {step === 3 && (
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <img src="/images/calc/4.jpg" alt="Schritt 2" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '20px',
                                        textAlign: 'center',
                                        overflowY: 'auto', // Прокрутка по вертикали внутри этого блока
                                        maxHeight: '95vh', // Максимал
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                        Schritt 2: Berechnen Sie die Haltedauer und die entsprechenden Erträge
                                    </Typography>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography id="shareholding-period-slider" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                                    Erwartete Haltedauer (Monate)
                                                </Typography>
                                                <Slider
                                                    value={shareholdingPeriod}
                                                    onChange={handlePeriodChange}
                                                    aria-labelledby="shareholding-period-slider"
                                                    valueLabelDisplay="auto"
                                                    step={1}
                                                    min={1}
                                                    max={48}
                                                    sx={{ marginBottom: '10px' }}
                                                />
                                                <TextField
                                                    value={shareholdingPeriod}
                                                    onChange={(e) => setShareholdingPeriod(Number(e.target.value))}
                                                    fullWidth
                                                    margin="dense"
                                                    size="small"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {showResults && result && (
                                        <Box mt={2} display="flex" justifyContent="center">
                                            <Box display="flex" flexDirection="column" alignItems="left">
                                                <Typography
                                                    variant="h6"
                                                    align="left"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: '1.5rem',
                                                    }}
                                                >
                                                    CAD: {formatNumber(result)}
                                                </Typography>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        EUR: {formatNumber((result * currencyRates.EUR).toFixed(2))}
                                                    </Typography>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        RUB: {formatNumber((result * currencyRates.RUB).toFixed(2))}
                                                    </Typography>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1, delay: 0.4 }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        NAIRA: {formatNumber((result * currencyRates.NAIRA).toFixed(2))}
                                                    </Typography>
                                                </motion.div>
                                            </Box>
                                        </Box>
                                    )}
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="outlined" color="primary" onClick={handleNextStep}>
                                            Weiter
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {step === 4 && (
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <img src="/images/calc/handleshake.jpg" alt="Schritt 3" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                        Schritt 3: Wir sind nur einen Schritt von Ihrer finanziellen Unabhängigkeit entfernt
                                    </Typography>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
                                            Jetzt wird alles ganz einfach, niemand kennt Ihren Namen und Ihre persönlichen Daten besser als Sie selbst.
                                        </Typography>
                                        <Typography variant="body1" mt={2} sx={{ fontSize: '1.5rem' }}>
                                            Geben Sie diese hier ein und der Antragsprozess zum Kauf der Wertpapiere wird abgeschlossen.
                                        </Typography>
                                        <Typography variant="body1" mt={2} sx={{ fontSize: '1.5rem' }}>
                                            So einfach! Nach der Überprüfung Ihrer persönlichen Daten erhalten Sie innerhalb von 24 Stunden eine Rückmeldung, ob Ihr Antrag auf Kauf akzeptiert wurde. Bitte beachten Sie, dass nach einer Ablehnung eine erneute Antragstellung frühestens nach 90 Tagen möglich ist.
                                        </Typography>
                                    </Box>
                                    <ButtonBecome />
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

export default InvestmentCalculator;