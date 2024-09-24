// Импорт необходимых модулей и компонентов
import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Slider,
    useMediaQuery,
    useTheme,
    Tooltip as MuiTooltip,
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Импорт вашего хранилища и языковых файлов
import { observer } from 'mobx-react-lite';
import store from './../../stores/userStore';
import de from './../../public/lang/de.json';

// Определение цветов для графиков
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Компоненты и функции для отображения иконок статуса
const CrownIcon = () => (
    // SVG-иконка короны
    <svg width="67" height="67" viewBox="0 0 24 24" fill="none">
        <path
            d="M2 20h20v2H2v-2zM7 13l-5 5h20l-5-5-5 4-5-4zM18 11.635l3.424-6.44-7.353 2.735-3.558-5.853-3.557 5.852-7.353-2.734L6 11.635l6 4.933 6-4.933z"
            fill="#FFD700"
        />
    </svg>
);

const MedalIcon = () => (
    // SVG-иконка медали
    <svg width="67" height="67" viewBox="0 0 24 24" fill="none">
        <path
            d="M12 2L8.5 8.5 1 9.5l5 5-2 9L12 18l8-4.5-2-9 5-5-7.5-1L12 2z"
            fill="#C0C0C0"
        />
    </svg>
);

const StarIcon = () => (
    // SVG-иконка звезды
    <svg width="67" height="67" viewBox="0 0 24 24" fill="none">
        <path
            d="M12 2L15 9h8l-6.5 5 2.5 8-7-4-7 4 2.5-8L1 9h8l3-7z"
            fill="#FFD700"
        />
    </svg>
);

// Функция для выбора иконки статуса в зависимости от суммы инвестиций
const getStatusIcon = (investmentAmount) => {
    if (investmentAmount >= 1000000) {
        return <CrownIcon />;
    } else if (investmentAmount >= 500000) {
        return <MedalIcon />;
    } else {
        return <StarIcon />;
    }
};

// Компонент для бегущей строки
const Marquee = ({ children }) => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                position: 'relative',
                p: 3,
                mt: 8,
            }}
        >
            <Box
                sx={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    animation: 'marquee 15s linear infinite',
                    '@keyframes marquee': {
                        '0%': { transform: 'translateX(100%)' },
                        '100%': { transform: 'translateX(-100%)' },
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

// Обновленный компонент BalanceHeader
const BalanceHeader = () => {
    const lang = de; // Используем немецкий язык
    const userBalanceCAD = store.investmentAmount; // Получаем сумму инвестиций пользователя из хранилища

    // Состояние для хранения курсов валют
    const [currencyRates, setCurrencyRates] = useState({
        USD: 0,
        EUR: 0,
        NGN: 1201.70, // Статичный курс NGN к CAD
    });

    // Функция для форматирования чисел с разделителями тысяч
    const formatNumber = (number, decimals = 5) => {
        const parts = number.toFixed(decimals).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    };


    // Получаем реальные курсы валют при загрузке компонента и каждые 5 секунд
    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                // Запрашиваем данные из API Банка Канады для USD и EUR
                const responseBoC = await fetch(
                    'https://www.bankofcanada.ca/valet/observations/FXUSDCAD,FXEURCAD/json?recent=1'
                );
                const dataBoC = await responseBoC.json();
                const observationsBoC = dataBoC.observations[0];

                // Извлекаем курсы валют из Банка Канады
                const usdRate = parseFloat(observationsBoC['FXUSDCAD'].v);
                const eurRate = parseFloat(observationsBoC['FXEURCAD'].v);

                // Конвертируем курсы, чтобы получить отношение CAD к валюте
                setCurrencyRates((prevRates) => ({
                    ...prevRates,
                    USD: 1 / usdRate,
                    EUR: 1 / eurRate,
                }));
            } catch (error) {
                console.error('Ошибка при получении курсов валют:', error);
            }
        };

        // Вызываем функцию при загрузке компонента
        fetchCurrencyRates();

        // Устанавливаем интервал обновления каждые 5 секунд
        const intervalId = setInterval(fetchCurrencyRates, 5000);

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    // Рассчитываем баланс пользователя в разных валютах
    const userBalanceUSD = userBalanceCAD * currencyRates.USD;
    const userBalanceEUR = userBalanceCAD * currencyRates.EUR;
    const userBalanceNGN = userBalanceCAD * currencyRates.NGN;

    return (
        <Marquee>
            <Typography variant="h5" component="span">
                {lang.dashboard.balance}:
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                CAD: {formatNumber(userBalanceCAD)}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                USD: {formatNumber(userBalanceUSD)}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                EUR: {formatNumber(userBalanceEUR)}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                NGN: {formatNumber(userBalanceNGN, 2)}
            </Typography>
        </Marquee>
    );
};

// Основной компонент Dashboard
const Dashboard = observer(() => {
    const lang = de; // Используем немецкий язык
    const [expanded, setExpanded] = useState(null); // Состояние для управления расширением виджетов
    const { investmentAmount } = store; // Получаем сумму инвестиций из хранилища
    const theme = useTheme(); // Получаем тему оформления
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Определяем, является ли устройство мобильным
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Определяем, является ли устройство планшетом
    const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg')); // Определяем, является ли устройство большим

    // Состояния для данных графиков
    const [investmentData, setInvestmentData] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [barData, setBarData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);

    // Получение исторических данных при загрузке компонента и каждые 5 секунд
    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                const endDate = new Date().toISOString().slice(0, 10);

                // Дата год назад
                const startDateObj = new Date();
                startDateObj.setFullYear(startDateObj.getFullYear() - 1);
                const startDate = startDateObj.toISOString().slice(0, 10);

                // Дата месяц назад
                const startDateMonthObj = new Date();
                startDateMonthObj.setMonth(startDateMonthObj.getMonth() - 1);
                const startDateMonth = startDateMonthObj.toISOString().slice(0, 10);

                // Запрос данных из API Банка Канады за год
                const responseYear = await fetch(
                    `https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?start_date=${startDate}&end_date=${endDate}`
                );
                const dataYear = await responseYear.json();
                const observationsYear = dataYear.observations;

                // Обработка данных для графика "Investment Over Time"
                const investmentChartData = observationsYear.map((obs) => {
                    const rate = parseFloat(obs['FXUSDCAD'].v);
                    const date = obs.d;
                    const investmentValueUSD = investmentAmount / rate;
                    return {
                        date,
                        investmentValueUSD: parseFloat(investmentValueUSD.toFixed(2)),
                    };
                });

                setInvestmentData(investmentChartData);

                // Подготовка данных для круговой диаграммы
                const responseMonth = await fetch(
                    `https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?start_date=${startDateMonth}&end_date=${endDate}`
                );
                const dataMonth = await responseMonth.json();
                const observationsMonth = dataMonth.observations;

                let upDays = 0;
                let downDays = 0;
                let flatDays = 0;

                for (let i = 1; i < observationsMonth.length; i++) {
                    const prevRate = parseFloat(observationsMonth[i - 1]['FXUSDCAD'].v);
                    const currRate = parseFloat(observationsMonth[i]['FXUSDCAD'].v);
                    if (currRate > prevRate) {
                        upDays++;
                    } else if (currRate < prevRate) {
                        downDays++;
                    } else {
                        flatDays++;
                    }
                }

                const pieChartData = [
                    { name: 'Kursanstieg', value: upDays },
                    { name: 'Kursrückgang', value: downDays },
                    { name: 'Keine Veränderung', value: flatDays },
                ];

                setPieData(pieChartData);

                // Подготовка данных для столбчатой диаграммы
                const monthlyData = {};
                observationsYear.forEach((obs) => {
                    const date = new Date(obs.d);
                    const month = date.toLocaleString('de-DE', { month: 'short' });
                    if (!monthlyData[month]) {
                        monthlyData[month] = [];
                    }
                    monthlyData[month].push(parseFloat(obs['FXUSDCAD'].v));
                });

                const barChartData = Object.keys(monthlyData).map((key) => ({
                    name: key,
                    value: parseFloat(
                        (
                            monthlyData[key].reduce((a, b) => a + b) / monthlyData[key].length
                        ).toFixed(4)
                    ),
                }));

                setBarData(barChartData);

                // Обработка данных для графика за последнюю неделю
                const observationsWeek = observationsYear.slice(-7);
                const weeklyChartData = observationsWeek.map((obs) => ({
                    date: obs.d,
                    value: parseFloat(obs['FXUSDCAD'].v),
                }));

                setWeeklyData(weeklyChartData);
            } catch (error) {
                console.error('Ошибка при получении исторических данных:', error);
            }
        };

        // Вызываем функцию при загрузке компонента
        fetchHistoricalData();

        // Устанавливаем интервал обновления каждые 5 секунд
        const intervalId = setInterval(fetchHistoricalData, 5000);

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [investmentAmount]);

    // Функция для форматирования даты на оси X
    const formatXAxis = (date) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('de-DE', options);
    };

    // Обработчик для закрытия расширенного виджета при клике вне его области
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

    // Функция для управления расширением виджета
    const handleExpand = (index) => {
        if (expanded === null || expanded === index) {
            setExpanded(expanded === index ? null : index);
        }
    };

    // Описания для всплывающих подсказок
    const widgetDescriptions = [
        'Diese Grafik zeigt, wie sich der Wert Ihrer Investition in USD im Laufe der Zeit verändert hätte, basierend auf Ihrem aktuellen Investitionsbetrag in CAD.',
        'Diese Tortendiagramm zeigt die Verteilung der Tage im letzten Monat, an denen der CAD/USD Wechselkurs gestiegen, gefallen oder unverändert geblieben ist.',
        'Diese Balkendiagramm zeigt den durchschnittlichen monatlichen CAD/USD Wechselkurs im letzten Jahr.',
        'Zeigt Ihren aktuellen Investitionsfortschritt basierend auf Ihrem Investitionsbetrag.',
        'Übersicht Ihres Mitgliedsstatus basierend auf Ihrem Investitionsbetrag.',
        'Diese Grafik zeigt den CAD/USD Wechselkurs der letzten Woche.',
    ];

    return (
        <Box>
            {/* Компонент заголовка с балансом */}
            <BalanceHeader />

            {/* Основное содержимое дашборда */}
            <Box
                sx={{ p: 2, ml: !isMobile && !isTablet ? 40 : 2 }}
                maxWidth={'lg'}
            >
                <Grid container spacing={2}>
                    {[
                        lang.dashboard.investmentOverTime,
                        lang.dashboard.pieChartExample,
                        lang.dashboard.barChartExample,
                        lang.dashboard.investmentProgress,
                        lang.dashboard.statusOverview,
                        lang.dashboard.randomCurve,
                    ].map((title, index) => (
                        <Grid
                            item
                            xs={12}
                            md={isLg ? 6 : 4}
                            key={title}
                            onClick={() => handleExpand(index)}
                        >
                            <MuiTooltip title={widgetDescriptions[index]} arrow>
                                <Paper
                                    className={expanded === index ? 'expanded-widget' : ''}
                                    sx={{
                                        p: 2,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease-in-out',
                                        transform:
                                            expanded === index
                                                ? 'translate(-50%, -50%) scale(1.2)'
                                                : 'scale(1)',
                                        position: expanded === index ? 'fixed' : 'relative',
                                        top: expanded === index ? '50%' : 'auto',
                                        left: expanded === index ? '50%' : 'auto',
                                        zIndex: expanded === index ? 10 : 1,
                                        width: expanded === index ? 400 : 250,
                                        height: expanded === index ? 400 : 250,
                                        my: 1,
                                        boxShadow: '30px',
                                    }}
                                    elevation={expanded === index ? 8 : 5}
                                >
                                    <Typography variant="h6">{title}</Typography>
                                    {index === 0 && (
                                        // График "Investment Over Time"
                                        <ResponsiveContainer width="100%" height="80%">
                                            <LineChart data={investmentData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="date" tickFormatter={formatXAxis} />
                                                <YAxis
                                                    domain={[
                                                        'dataMin - dataMin * 0.05',
                                                        'dataMax + dataMax * 0.05',
                                                    ]}
                                                    tickFormatter={(value) =>
                                                        value.toLocaleString('de-DE', {
                                                            style: 'currency',
                                                            currency: 'USD',
                                                        })
                                                    }
                                                />
                                                <Tooltip
                                                    formatter={(value) =>
                                                        value.toLocaleString('de-DE', {
                                                            style: 'currency',
                                                            currency: 'USD',
                                                        })
                                                    }
                                                    labelFormatter={(label) =>
                                                        new Date(label).toLocaleDateString('de-DE')
                                                    }
                                                />
                                                <Legend />
                                                <Line
                                                    type="monotone"
                                                    dataKey="investmentValueUSD"
                                                    stroke="#8884d8"
                                                    name="Investition in USD"
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    )}
                                    {index === 1 && (
                                        // Круговая диаграмма
                                        <ResponsiveContainer width="100%" height="80%">
                                            <PieChart>
                                                <Pie
                                                    data={pieData}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={80}
                                                    label
                                                >
                                                    {pieData.map((entry, index) => (
                                                        <Cell
                                                            key={`cell-${index}`}
                                                            fill={COLORS[index % COLORS.length]}
                                                        />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    )}
                                    {index === 2 && (
                                        // Столбчатая диаграмма
                                        <ResponsiveContainer width="100%" height="80%">
                                            <BarChart data={barData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis
                                                    domain={['dataMin - 0.05', 'dataMax + 0.05']}
                                                    tickFormatter={(value) => value.toFixed(2)}
                                                />
                                                <Tooltip
                                                    formatter={(value) => value.toFixed(4)}
                                                    labelFormatter={(label) => label}
                                                />
                                                <Legend />
                                                <Bar
                                                    dataKey="value"
                                                    fill="#8884d8"
                                                    name="Durchschnittlicher Kurs"
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    )}
                                    {index === 3 && (
                                        // Прогресс инвестиций
                                        <Box sx={{ mt: 9 }}>
                                            <Typography variant="body1">
                                                {lang.dashboard.investedUnits.replace(
                                                    '{amount}',
                                                    investmentAmount.toLocaleString('en-US')
                                                )}
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
                                        // Статус участника
                                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                                            {getStatusIcon(investmentAmount)}
                                            <Typography variant="body1" sx={{ mt: 1 }}>
                                                {investmentAmount >= 1000000
                                                    ? lang.dashboard.kingMember
                                                    : investmentAmount >= 500000
                                                        ? lang.dashboard.eliteMember
                                                        : lang.dashboard.standardMember}
                                            </Typography>
                                        </Box>
                                    )}
                                    {index === 5 && (
                                        // График за последнюю неделю
                                        <ResponsiveContainer width="100%" height="80%">
                                            <LineChart data={weeklyData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="date" tickFormatter={formatXAxis} />
                                                <YAxis
                                                    domain={['dataMin - 0.02', 'dataMax + 0.02']}
                                                    tickFormatter={(value) => value.toFixed(4)}
                                                />
                                                <Tooltip
                                                    formatter={(value) => value.toFixed(4)}
                                                    labelFormatter={(label) =>
                                                        new Date(label).toLocaleDateString('de-DE')
                                                    }
                                                />
                                                <Legend />
                                                <Line
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke="#8884d8"
                                                    name="Kurs CAD/USD"
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    )}
                                </Paper>
                            </MuiTooltip>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
});

export default Dashboard;
