import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, Paper, Grid, Slider, Button, useTheme, useMediaQuery, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ButtonBecome from './ButtonBecome';

const steps = [
    {
        title: 'Введение',
        content: `Мы очень рады вашему интересу к компании Victorum и ее деятельности. 
        Пожалуйста, учтите, что в настоящее время у нас повышенный объем запросов. 
        Это обстоятельство в сочетании с ограниченным контингентом ценных бумаг для внешних инвесторов приводит к тому, что, к сожалению, не каждый заинтересованный инвестор может получить ценные бумаги. 
        Мы держим за вас кулаки и готовы ответить на ваши вопросы по номеру 76998789 или по адресу support@hhjjnbnjjj! 
        С уважением, команда поддержки Victorum`,
        image: '/images/calc/1.jpg',
        finalStep: false
    },
    {
        title: 'Краткая инструкция',
        content: `Вы квалифицированный, склонный к риску и ориентированный на прибыль инвестор? 
        Вы ищете динамичные инвестиционные возможности за пределами зоны евро? 
        Канада для вас ассоциируется не только с кленовым сиропом, но и с одной из самых стабильных и быстрорастущих экономик в мире? 
        Тогда вы пришли по адресу, и мы надеемся, что вы будете учтены при распределении ценных бумаг! 
        За три-четыре минуты и в три простых этапа вы можете легко и просто оформить распределение и покупку ценных бумаг. 
        Если у вас возникнут вопросы или технические трудности, не стесняйтесь обращаться к нам. 
        Наша команда работает ежедневно с 9:00 до 18:00.`,
        image: 'https://example.com/image2.jpg',
        finalStep: false
    },
    {
        title: 'Шаг 1: Выберите количество ценных бумаг',
        content: '',
        image: 'https://example.com/image3.jpg',
        finalStep: false
    },
    {
        title: 'Шаг 2: Рассчитайте срок владения и соответствующие доходы',
        content: '',
        image: 'https://example.com/image4.jpg',
        finalStep: false
    },
    {
        title: 'Шаг 3: Мы в одном шаге от вашей финансовой независимости',
        content: `Теперь все становится просто, никто не знает ваше имя и ваши личные данные лучше вас самих. 
        Введите их сюда, и процесс подачи заявки на покупку ценных бумаг будет завершен. 
        Так просто! 
        После проверки ваших личных данных вы получите ответ в течение 24 часов о том, была ли принята ваша заявка на покупку. 
        Пожалуйста, обратите внимание, что после отклонения заявки повторная подача возможна не ранее чем через 90 дней.`,
        image: 'https://example.com/image5.jpg',
        finalStep: true
    }
];

const InvestmentCalculator = () => {
    const [step, setStep] = useState(0); // For controlling the steps
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
        if (steps[step].finalStep) {
            router.push('/signup');
        } else {
            setStep((prevStep) => prevStep + 1);
        }
    };

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
        <Container maxWidth="md" sx={{ mt: isMobile ? 4 : 8 }}>
            <Modal open={true} onClose={() => { }}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    p={2}
                >
                    <Paper elevation={3} sx={{ padding: { xs: '10px', md: '20px' }, maxWidth: '800px', width: '100%' }}>
                        <Box display="flex" justifyContent="center" mb={3}>
                            <img src={steps[step].image} alt={steps[step].title} width="100%" />
                        </Box>
                        <Typography variant="h5" align="center" gutterBottom>
                            {steps[step].title}
                        </Typography>
                        <Typography variant="body1" align="center">
                            {steps[step].content}
                        </Typography>
                        {step === 2 && (
                            <Box mt={3}>
                                <Grid container spacing={2} direction="column">
                                    <Grid item xs={12}>
                                        <Typography id="investment-amount-slider" gutterBottom>
                                            Сумма инвестиций (CAD)
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
                                            label="Количество акций"
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
                                            label="Ожидаемая распределенная дивидендная доходность (%)"
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
                        )}
                        {step === 3 && (
                            <Box mt={3}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Typography id="shareholding-period-slider" gutterBottom>
                                            Ожидаемый срок владения (месяцы)
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
                        )}
                        {showResults && result && step < 4 && (
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
                                                color: result * currencyRates.EUR > investmentAmount ? 'green' : 'red'
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
                                                color: result * currencyRates.RUB > investmentAmount ? 'green' : 'red'
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
                                                color: result * currencyRates.NAIRA > investmentAmount ? 'green' : 'red'
                                            }}
                                        >
                                            NAIRA: {formatNumber((result * currencyRates.NAIRA).toFixed(2))}
                                        </Typography>
                                    </motion.div>
                                </Box>
                            </Box>
                        )}
                        <Box display="flex" justifyContent="flex-end" mt={3}>
                            <Button variant="contained" color="primary" onClick={handleNextStep}>
                                {steps[step].finalStep ? 'Стать инвестором' : 'Далее'}
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Modal>
        </Container>
    );
};

export default InvestmentCalculator;
