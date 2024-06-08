import React, { useState } from 'react';
import { Container, TextField, Typography, Box, Paper, Grid, Slider } from '@mui/material';

const InvestmentCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(10000); // Default minimum investment
    const [shareholdingPeriod, setShareholdingPeriod] = useState(1); // Default minimum holding period in months
    const [distributedDividend, setDistributedDividend] = useState(6.8); // Default dividend
    const [result, setResult] = useState(null);

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

    return (
        <Container maxWidth="auto">
            <Typography variant="h5" align="center" gutterBottom>
                Investment Calculator
            </Typography>
            <Paper elevation={3} style={{ padding: '30px', marginTop: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography id="investment-amount-slider" gutterBottom>
                            Investment Amount (USD/EUR)
                        </Typography>
                        <Slider
                            value={investmentAmount}
                            onChange={handleInvestmentChange}
                            aria-labelledby="investment-amount-slider"
                            valueLabelDisplay="auto"
                            step={10000}
                            min={10000}
                            max={10000000}
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
                            value={investmentAmount / 1} // Assuming 1 USD/EUR = 1 share
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                {result && (
                    <Box mt={4}>
                        <Typography variant="h6" align="center">
                            Result: {result} USD/EUR
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};

export default InvestmentCalculator;
