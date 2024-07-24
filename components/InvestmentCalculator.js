import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, Paper, Grid, Slider, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const InvestmentCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(2500); // Default minimum investment
    const [shareholdingPeriod, setShareholdingPeriod] = useState(1); // Default minimum holding period in months
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

    const handleInvestmentChange = (e, newValue) => {
        setInvestmentAmount(newValue);
        setShowResults(true);
    };

    const handlePeriodChange = (e, newValue) => {
        setShareholdingPeriod(newValue);
        setShowResults(true);
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <Container maxWidth="auto" sx={{ mt: isMobile ? -2 : -4 }}>
            <Box display="flex" justifyContent="center" mt={4}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{
                            marginBottom: '1rem',
                        }}
                    >
                        Investment Calculator
                    </Typography>
                </motion.div>
            </Box>
            <Paper elevation={3} sx={{ padding: { xs: '10px', md: '20px' }, marginTop: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography id="investment-amount-slider" gutterBottom>
                            Investment Amount (CAD)
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
                    <Grid item xs={12} md={6}>
                        <Typography id="shareholding-period-slider" gutterBottom>
                            Anticipated shareholding period (months)
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
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Anticipated distributed dividend (%)"
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
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Amount of Shares"
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
                </Grid>
                {showResults && result && (
                    <Box mt={2} display="flex" justifyContent="center">
                        <Box display="flex" flexDirection="column" alignItems="left">
                            <Typography
                                variant="h6"
                                align="left"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
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
                                        fontSize: '1.2rem',
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
                                        fontSize: '1.2rem',
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
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    NAIRA: {formatNumber((result * currencyRates.NAIRA).toFixed(2))}
                                </Typography>
                            </motion.div>
                        </Box>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};

export default InvestmentCalculator;
