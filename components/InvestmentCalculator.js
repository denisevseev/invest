import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, Paper, Grid, Slider } from '@mui/material';
import { motion } from 'framer-motion';

const InvestmentCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(2500); // Default minimum investment
    const [shareholdingPeriod, setShareholdingPeriod] = useState(1); // Default minimum holding period in months
    const [distributedDividend, setDistributedDividend] = useState(6.8); // Default dividend
    const [result, setResult] = useState(null);
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

    const calculateResult = () => {
        if (investmentAmount && shareholdingPeriod) {
            const totalDividend = (investmentAmount * (distributedDividend / 100)) * (shareholdingPeriod / 12);
            const totalAmount = parseFloat(investmentAmount) + totalDividend;
            setResult(totalAmount.toFixed(2));
        }
    };

    const handleInvestmentChange = (e, newValue) => {
        setInvestmentAmount(newValue);
        calculateResult();
    };

    const handlePeriodChange = (e, newValue) => {
        setShareholdingPeriod(newValue);
        calculateResult();
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <Container maxWidth="auto">
            <Typography variant="h5" align="center" gutterBottom>
                Investment Calculator
            </Typography>
            <Paper elevation={3} style={{ padding: '30px', marginTop: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
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
                        />
                        <TextField
                            value={investmentAmount}
                            onChange={(e) => handleInvestmentChange(e, Number(e.target.value))}
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                        />
                        <TextField
                            value={shareholdingPeriod}
                            onChange={(e) => handlePeriodChange(e, Number(e.target.value))}
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Anticipated distributed dividend (%)"
                            type="number"
                            value={distributedDividend}
                            onChange={(e) => setDistributedDividend(Number(e.target.value))}
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Amount of Shares"
                            type="number"
                            value={investmentAmount / 1} // Assuming 1 CAD = 1 share
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                {result && (
                    <Box mt={4} display="flex" justifyContent="center">
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
                                    align="center"
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
            </Paper>
        </Container>
    );
};

export default InvestmentCalculator;
