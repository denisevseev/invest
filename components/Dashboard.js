import React, { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';
import { observer } from 'mobx-react-lite';
import store from '../stores/userStore';

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

const Dashboard = observer(() => {
    const [expanded, setExpanded] = useState(null);
    const { investmentAmount, shareholdingPeriod } = store;

    const handleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <Box sx={{ p: 2, ml: 25, mt: 10 }} maxWidth={"lg"}>
            <Grid container spacing={2}>
                {['Investment Over Time', 'Pie Chart Example', 'Bar Chart Example', 'Investment Progress', 'Status Overview', 'Random Curve'].map((title, index) => (
                    <Grid item xs={12} md={4} key={title} onClick={() => handleExpand(index)}>
                        <Paper
                            sx={{
                                p: 2,
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                                transform: expanded === index ? 'scale(2)' : 'scale(1)',
                                zIndex: expanded === index ? 2 : 1,
                                width: expanded === index ? 400 : 350.67, //  Ширина Paper
                                height: expanded === index ? 400 : 266.67 // Высота Paper
                            }}
                            elevation={expanded === index ? 8 : 1}
                        >
                            <Typography variant="h6">{title}</Typography>
                            {index === 0 && (
                                <LineChart  width={expanded === 0 ? 400 : 266.67} height={expanded === 0 ? 350 : 250} data={lineData}>
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
                                        cx={expanded === 1 ? 300 : 150}
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
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1">
                                        You have invested {investmentAmount} units
                                    </Typography>
                                </Box>
                            )}
                            {index === 4 && (
                                <Typography variant="body1">
                                    {investmentAmount >= 1000000 ? 'Gold Member' : 'Standard Member'}
                                </Typography>
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