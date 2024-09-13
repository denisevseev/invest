import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Slider, TextField, Modal, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import store from './../../stores/userStore';
import RiskAcceptanceModal from '../RiskAcceptance/RiskAcceptanceModal';

const InvestmentCalculator = () => {
    const [step, setStep] = useState(0); // Управление шагами
    const [investmentAmount, setInvestmentAmount] = useState(store.investmentAmount || 2500); // Минимальная сумма инвестиций
    const [shareholdingPeriod, setShareholdingPeriod] = useState(store.shareholdingPeriod || 1); // Минимальный срок владения
    const [distributedDividend, setDistributedDividend] = useState(0); // Дивиденд
    const [result, setResult] = useState(null);
    const [showResults, setShowResults] = useState(false); // Для отображения результатов
    const [currencyRates, setCurrencyRates] = useState({
        EUR: 0.7,
        RUB: 55.0,
        NAIRA: 450.0
    });

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
                console.error('Fehler beim Abrufen der Wechselkurse:', error);
            }
        };

        fetchCurrencyRates();
    }, []);

    useEffect(() => {
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

    const handlePreviousStep = () => {
        setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };

    const handleInvestmentChange = (e, newValue) => {
        setInvestmentAmount(newValue);
        store.investmentAmount = newValue;
        setShowResults(true);
    };

    const handlePeriodChange = (e, newValue) => {
        setShareholdingPeriod(newValue);
        store.shareholdingPeriod = newValue;
        setShowResults(true);
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    const handleClickFinish = async () => {
        await updateInvestmentData(store.user.email, investmentAmount, shareholdingPeriod);
    };

    const updateInvestmentData = async (email, investmentAmount, shareholdingPeriod) => {
        try {
            const response = await fetch('/api/setInvestorData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, investmentAmount, shareholdingPeriod }),
            });

            const data = await response.json();

            if (response.ok) {
                store.isModalOpen = true;
                store.modalText = 'Daten erfolgreich aktualisiert';
                store.reloadPage = true;
            } else {
                store.isModalOpen = true;
                store.modalText = data.message;
            }
        } catch (error) {
            alert('Fehler beim Aktualisieren der Daten.');
        }
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
                <RiskAcceptanceModal />
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
                                    <Box display="flex" justifyContent="space-between" mt={3}>
                                        <Button variant="outlined" color="primary" disabled>
                                            Zurück
                                        </Button>
                                        <Button variant="outlined" color="primary" onClick={handleNextStep}>
                                            Weiter
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {step > 0 && (
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
                                <img src={`/images/calc/${step + 1}.jpg`} alt={`Step ${step}`} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
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
                                        Schritt {step}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography gutterBottom sx={{ fontSize: '1.5rem' }}>
                                                Investitionssumme (CAD)
                                            </Typography>
                                            <Slider
                                                value={investmentAmount}
                                                onChange={handleInvestmentChange}
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
                                            <Typography gutterBottom sx={{ fontSize: '1.5rem' }}>
                                                Erwartete Haltedauer (Monate)
                                            </Typography>
                                            <Slider
                                                value={shareholdingPeriod}
                                                onChange={handlePeriodChange}
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
                                    <Box display="flex" justifyContent="space-between" mt={3}>
                                        <Button variant="outlined" color="primary" onClick={handlePreviousStep}>
                                            Zurück
                                        </Button>
                                        <Button variant="outlined" color="primary" onClick={handleNextStep}>
                                            Weiter
                                        </Button>
                                    </Box>
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
