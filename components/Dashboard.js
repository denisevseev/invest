import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Slider } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';
import { observer } from 'mobx-react-lite';
import store from '../stores/userStore';
import { KingBed, EmojiEvents, Star } from '@mui/icons-material'; // Импортируем иконки

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

// // Функция для получения иконки статуса
// const getStatusIcon = (investmentAmount) => {
//     if (investmentAmount >= 1000000) {
//         return <KingBed fontSize="large" />;
//     } else if (investmentAmount >= 500000) {
//         return <EmojiEvents fontSize="large" />;
//     } else {
//         return <Star fontSize="large" />;
//     }
// };


// Корона для King Member
const CrownIcon = () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20h20v2H2v-2zM7 13l-5 5h20l-5-5-5 4-5-4zM18 11.635l3.424-6.44-7.353 2.735-3.558-5.853-3.557 5.852-7.353-2.734L6 11.635l6 4.933 6-4.933z" fill="#FFD700"/>
    </svg>
);

// Медаль для Elite Member
const MedalIcon = () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L8.5 8.5 1 9.5l5 5-2 9L12 18l8-4.5-2-9 5-5-7.5-1L12 2z" fill="#C0C0C0"/>
    </svg>
);

// Звезда для Standard Member
const StarIcon = () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 9h8l-6.5 5 2.5 8-7-4-7 4 2.5-8L1 9h8l3-7z" fill="#FFD700"/>
    </svg>
);

// Функция для получения иконки статуса
const getStatusIcon = (investmentAmount) => {
    if (investmentAmount >= 1000000) {
        return <CrownIcon />;
    } else if (investmentAmount >= 500000) {
        return <MedalIcon />;
    } else {
        return <StarIcon />;
    }
};

// Компонент Dashboard с использованием новых иконок
const Dashboard = observer(() => {
    const [expanded, setExpanded] = useState(null);
    const { investmentAmount } = store;

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
        <Box sx={{ p: 2, ml: 25, mt: 10 }} maxWidth={"lg"}>
            <Grid container spacing={2}>
                {['Investment Over Time', 'Pie Chart Example', 'Bar Chart Example', 'Investment Progress', 'Status Overview', 'Random Curve'].map((title, index) => (
                    <Grid item xs={12} md={4} key={title} onClick={() => handleExpand(index)}>
                        <Paper
                            className={expanded === index ? 'expanded-widget' : ''}
                            sx={{
                                p: 2,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                transform: expanded === index ? 'translate(-50%, -50%) scale(1.3)' : 'scale(1)',
                                position: expanded === index ? 'fixed' : 'relative',
                                top: expanded === index ? '50%' : 'auto',
                                left: expanded === index ? '50%' : 'auto',
                                zIndex: expanded === index ? 10 : 1,
                                width: expanded === index ? 400 : 350.67,
                                height: expanded === index ? 400 : 266.67
                            }}
                            elevation={expanded === index ? 8 : 1}
                        >
                            <Typography variant="h6">{title}</Typography>
                            {index === 0 && (
                                <LineChart width={expanded === 0 ? 400 : 266.67} height={expanded === 0 ? 350 : 250} data={lineData}>
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
                                <PieChart width={expanded === 1 ? 400 : 266.67} height={expanded === 1 ? 350 : 250}>
                                    <Pie
                                        data={data}
                                        cx={expanded === 1 ? 200 : 133.33}
                                        cy={expanded === 1 ? 150 : 100}
                                        labelLine={false}
                                        outerRadius={expanded === 1 ? 120 : 80}
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
                                <BarChart width={expanded === 2 ? 400 : 266.67} height={expanded === 2 ? 350 : 250} data={barData}>
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
                                        You have invested {investmentAmount} units
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
                                    <Typography variant="h6">Status Overview</Typography>
                                    {getStatusIcon(investmentAmount)}
                                    <Typography variant="body1" sx={{ mt: 1 }}>
                                        {investmentAmount >= 1000000 ? 'King Member' :
                                            investmentAmount >= 500000 ? 'Elite Member' : 'Standard Member'}
                                    </Typography>
                                </Box>
                            )}
                            {index === 5 && (
                                <LineChart width={expanded === 5 ? 400 : 266.67} height={expanded === 5 ? 350 : 250} data={lineData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                </LineChart>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
});

export default Dashboard;

