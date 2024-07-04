// components/StatisticsChart.js
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const COLORS = ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f'];


const StatisticsChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/admin/getUsers');
                const users = response.data;

                const stats = {
                    admin: 0,
                    manager: 0,
                    employee: 0,
                    investor: 0
                };

                users.forEach(user => {
                    if (user.role in stats) {
                        stats[user.role]++;
                    } else {
                        stats.investor++;
                    }
                });

                const chartData = Object.keys(stats).map(key => ({
                    name: key.charAt(0).toUpperCase() + key.slice(1),
                    value: stats[key]
                }));

                setData(chartData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4" align="center" gutterBottom>
                User Statistics
            </Typography>
            <PieChart width={900} height={900}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={300}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Box>
    );
};

export default StatisticsChart;
