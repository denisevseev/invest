import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, Paper, Grid, Slider, Button, useTheme, useMediaQuery, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ButtonBecome from "./ButtonBecome";

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
        setStep((prevStep) => prevStep + 1);
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
                                <img src="/images/calc/1.jpg" alt="Введение" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '10px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="body1">
                                        Мы очень рады вашему интересу к компании Victorum и ее деятельности. <br />
                                        Пожалуйста, учтите, что в настоящее время у нас повышенный объем запросов. <br />
                                        Это обстоятельство в сочетании с ограниченным контингентом ценных бумаг для внешних инвесторов приводит к тому, что, к сожалению, не каждый заинтересованный инвестор может получить ценные бумаги. <br />
                                        Мы держим за вас кулаки и готовы ответить на ваши вопросы по номеру 76998789 или по адресу support@hhjjnbnjjj! <br />
                                        С уважением, команда поддержки Victorum
                                    </Typography>
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="contained" color="primary" onClick={handleNextStep}>
                                            Далее
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
                                <img src="/images/calc/2.jpg" alt="Краткая инструкция" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '10px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Краткая инструкция
                                    </Typography>
                                    <Typography variant="body1" align="center">
                                        Вы квалифицированный, склонный к риску и ориентированный на прибыль инвестор? <br />
                                        Вы ищете динамичные инвестиционные возможности за пределами зоны евро? <br />
                                        Канада для вас ассоциируется не только с кленовым сиропом, но и с одной из самых стабильных и быстрорастущих экономик в мире? <br />
                                        Тогда вы пришли по адресу, и мы надеемся, что вы будете учтены при распределении ценных бумаг! <br />
                                        За три-четыре минуты и в три простых этапа вы можете легко и просто оформить распределение и покупку ценных бумаг. <br />
                                        Если у вас возникнут вопросы или технические трудности, не стесняйтесь обращаться к нам. <br />
                                        Наша команда работает ежедневно с 9:00 до 18:00.
                                    </Typography>
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="contained" color="primary" onClick={handleNextStep}>
                                            Далее
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
                                <img src="/images/calc/3.jpg" alt="Шаг 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '10px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Шаг 1: Выберите количество ценных бумаг
                                    </Typography>
                                    <Box>
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
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="contained" color="primary" onClick={handleNextStep}>
                                            Далее
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
                                <img src="/images/calc/4.jpg" alt="Шаг 2" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '10px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Шаг 2: Рассчитайте срок владения и соответствующие доходы
                                    </Typography>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
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
                                    <Box display="flex" justifyContent="flex-end" mt={3}>
                                        <Button variant="contained" color="primary" onClick={handleNextStep}>
                                            Далее
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
                                <img src="images/calc/handleshake.jpg" alt="Шаг 3" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        padding: '10px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Шаг 3: Мы в одном шаге от вашей финансовой независимости
                                    </Typography>
                                    <Box>
                                        <Typography variant="body1">
                                            Теперь все становится просто, никто не знает ваше имя и ваши личные данные лучше вас самих. <br />
                                            Введите их сюда, и процесс подачи заявки на покупку ценных бумаг будет завершен. <br />
                                            Так просто! <br />
                                            После проверки ваших личных данных вы получите ответ в течение 24 часов о том, была ли принята ваша заявка на покупку. <br />
                                            Пожалуйста, обратите внимание, что после отклонения заявки повторная подача возможна не ранее чем через 90 дней.
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
