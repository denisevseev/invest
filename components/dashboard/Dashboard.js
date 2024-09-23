import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Slider, useMediaQuery, useTheme } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';
import { observer } from 'mobx-react-lite';
import store from './../../stores/userStore';
import en from './../../public/lang/en.json';
import de from './../../public/lang/de.json';
import randomNormal from 'random-normal';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const barData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jul', uv: 3490, pv: 4300 },
];

const lineData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jul', uv: 3490, pv: 4300 },
];

const CrownIcon = () => (
    <svg width="67" height="67" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20h20v2H2v-2zM7 13l-5 5h20l-5-5-5 4-5-4zM18 11.635l3.424-6.44-7.353 2.735-3.558-5.853-3.557 5.852-7.353-2.734L6 11.635l6 4.933 6-4.933z" fill="#FFD700"/>
    </svg>
);

const MedalIcon = () => (
    <svg width="67" height="67" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L8.5 8.5 1 9.5l5 5-2 9L12 18l8-4.5-2-9 5-5-7.5-1L12 2z" fill="#C0C0C0"/>
    </svg>
);

const StarIcon = () => (
    <svg width="67" height="67" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 9h8l-6.5 5 2.5 8-7-4-7 4 2.5-8L1 9h8l3-7z" fill="#FFD700"/>
    </svg>
);

const getStatusIcon = (investmentAmount) => {
    if (investmentAmount >= 1000000) {
        return <CrownIcon />;
    } else if (investmentAmount >= 500000) {
        return <MedalIcon />;
    } else {
        return <StarIcon />;
    }
};

const Marquee = ({ children }) => {
    return (
        <Box sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '100%',
            position: 'relative',
            p: 3,
            mt: 8
        }}>
            <Box sx={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                position: 'absolute',
                animation: 'marquee 15s linear infinite',
                '@keyframes marquee': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' }
                }
            }}>
                {children}
            </Box>
        </Box>
    );
};

const BalanceHeader = () => {
    const lang = store.lang === 'de' ? de : en;
    const userBalanceCAD = store.investmentAmount;
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

    const userBalanceEUR = (userBalanceCAD * currencyRates.EUR).toFixed(2);
    const userBalanceRUB = (userBalanceCAD * currencyRates.RUB).toFixed(2);
    const userBalanceNAIRA = (userBalanceCAD * currencyRates.NAIRA).toFixed(2);

    return (
        <Marquee>
            <Typography variant="h5" component="span">
                {lang.dashboard.balance}:
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                CAD: {userBalanceCAD.toFixed(2)}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                EUR: {userBalanceEUR}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                RUB: {userBalanceRUB}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                NAIRA: {userBalanceNAIRA}
            </Typography>
        </Marquee>
    );
};

const Dashboard = observer(() => {
    const lang = store.lang === 'de' ? de : en;
    const [expanded, setExpanded] = useState(null);
    const { investmentAmount } = store;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isXl = useMediaQuery(theme.breakpoints.up('lg'));


    const [cadData, setCadData] = useState([]);
    const appId = '69fc9c5292074fecbe9043784ddaa38e';

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        const fetchTodayRate = async () => {
            try {
                const response = await fetch(
                    `https://openexchangerates.org/api/latest.json?app_id=${appId}&symbols=CAD`
                );
                const data = await response.json();
                debugger
                return data.rates.CAD;
            } catch (error) {
                console.error('Error fetching today rate:', error);
                return null;
            }
        };

        const generateTestData = async () => {
            const todayRate = await fetchTodayRate();
            const today = new Date();

            // Сохраняем сгенерированные данные в localStorage,
            // чтобы они не менялись при каждом рендере
            const storedData = localStorage.getItem('cadData');
            if (storedData) {
                return JSON.parse(storedData);
            }

            const testData = [];
            for (let i = 6; i >= 0; i--) {
                const currentDate = new Date(today);
                currentDate.setDate(today.getDate() - i);
                const currentDateStr = currentDate.toISOString().slice(0, 10);

                let value;
                if (i === 0 && todayRate) {
                    value = todayRate;
                } else {
                    // Генерируем случайное число с нормальным распределением
                    value = randomNormal({ mean: todayRate, dev: 0.000001 });
                }

                testData.push({
                    date: currentDateStr,
                    value,
                });
            }

            // Сохраняем данные в localStorage
            localStorage.setItem('cadData', JSON.stringify(testData));
            return testData;
        };

        generateTestData().then(data => setCadData(data));
    }, []);

    // Функция для форматирования даты на оси X
    const formatXAxis = (date) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expanded !== null && !event.target.closest('.expanded-widget')) {
                setExpanded(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [expanded]);

    const handleExpand = (index) => {
        if (expanded === null || expanded === index) {
            setExpanded(expanded === index ? null : index);
        }
    };

    return (
        <Box>
            <BalanceHeader />
            <Box sx={{ p: 2, ml: !isMobile && !isTablet ? 40 : 2 }} maxWidth={"lg"}>
                <Grid container spacing={2}>
                    {[
                        lang.dashboard.investmentOverTime,
                        lang.dashboard.pieChartExample,
                        lang.dashboard.barChartExample,
                        lang.dashboard.investmentProgress,
                        lang.dashboard.statusOverview,
                        lang.dashboard.randomCurve
                    ].map((title, index) => (
                        <Grid item xs={12} md={isLg ? 6 : 4} key={title} onClick={() => handleExpand(index)}>
                            <Paper
                                className={expanded === index ? 'expanded-widget' : ''}
                                sx={{
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease-in-out',
                                    transform: expanded === index ? 'translate(-50%, -50%) scale(1.2)' : 'scale(1)', // Reduced scale
                                    position: expanded === index ? 'fixed' : 'relative',
                                    top: expanded === index ? '50%' : 'auto',
                                    left: expanded === index ? '50%' : 'auto',
                                    zIndex: expanded === index ? 10 : 1,
                                    width: expanded === index ? 300 : 250, // Adjusted width
                                    height: expanded === index ? 300 : 250, // Adjusted height
                                    my: 1,
                                    boxShadow: '30px'
                                }}
                                elevation={expanded === index ? 8 : 5}
                            >
                                <Typography variant="h6">{title}</Typography>
                                {index === 0 && (
                                    <LineChart width={expanded === 0 ? 300 : 250} height={expanded === 0 ? 250 : 200} data={lineData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                    </LineChart>
                                )}
                                {index === 1 && (
                                    <PieChart width={expanded === 1 ? 300 : 250} height={expanded === 1 ? 250 : 200}>
                                        <Pie
                                            data={data}
                                            cx={expanded === 1 ? 150 : 125}
                                            cy={expanded === 1 ? 125 : 100}
                                            labelLine={false}
                                            outerRadius={expanded === 1 ? 100 : 80} // Adjusted outer radius
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                )}
                                {index === 2 && (
                                    <BarChart width={expanded === 2 ? 300 : 250} height={expanded === 2 ? 250 : 200} data={barData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="uv" fill="#8884d8" />
                                        <Bar dataKey="pv" fill="#82ca9d" />
                                    </BarChart>
                                )}
                                {index === 3 && (
                                    <Box sx={{ mt: 9 }}>
                                        <Typography variant="body1">
                                            {lang.dashboard.investedUnits.replace('{amount}', investmentAmount)}
                                        </Typography>
                                        <Slider
                                            value={investmentAmount}
                                            min={0}
                                            max={1000000}
                                            sx={{ mt: 2 }}
                                        />
                                    </Box>
                                )}
                                {index === 4 && (
                                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                                        {getStatusIcon(investmentAmount)}
                                        <Typography variant="body1" sx={{ mt: 1 }}>
                                            {investmentAmount >= 1000000 ? lang.dashboard.kingMember :
                                                investmentAmount >= 500000 ? lang.dashboard.eliteMember : lang.dashboard.standardMember}
                                        </Typography>
                                    </Box>
                                )}
                                {index === 5 && (
                                    <LineChart width={expanded === 5 ? 300 : 250} height={expanded === 5 ? 250 : 200} data={cadData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        {/* Изменяем формат даты на оси X */}
                                        <XAxis dataKey="date" tickFormatter={formatXAxis} fontSize={10} />
                                        <YAxis domain={['auto', 'auto']} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                                    </LineChart>
                                )}
                            </Paper>
                        </Grid>

                    ))}
                </Grid>
            </Box>
        </Box>
    );
});

export default Dashboard;