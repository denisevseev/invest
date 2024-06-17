import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, useMediaQuery, TableRow, Paper, Typography, Box, useTheme, Grid } from '@mui/material';
import { styled } from '@mui/system';

const events = [
    { date: '2024-06-16', event: 'Federal Reserve Meeting', impact: 'High' },
    { date: '2024-06-17', event: 'ECB Monetary Policy Meeting', impact: 'Medium' },
    { date: '2024-06-18', event: 'US Unemployment Rate Release', impact: 'High' },
    { date: '2024-06-19', event: 'BOJ Policy Meeting', impact: 'Medium' },
    { date: '2024-06-20', event: 'UK GDP Release', impact: 'High' },
    { date: '2024-06-21', event: 'Canada CPI Release', impact: 'Medium' },
    { date: '2024-06-22', event: 'Germany Ifo Business Climate', impact: 'Medium' },
    { date: '2024-06-23', event: 'France Consumer Confidence', impact: 'Low' },
    { date: '2024-06-24', event: 'US Durable Goods Orders', impact: 'High' },
    { date: '2024-06-25', event: 'Australia Retail Sales', impact: 'Medium' },
    { date: '2024-06-26', event: 'China Industrial Production', impact: 'High' },
    { date: '2024-06-27', event: 'Japan Retail Sales', impact: 'Medium' },
    { date: '2024-06-28', event: 'US Consumer Confidence', impact: 'High' },
    { date: '2024-06-29', event: 'UK Manufacturing PMI', impact: 'Medium' },
    { date: '2024-06-30', event: 'Germany Unemployment Rate', impact: 'High' },
    { date: '2024-07-01', event: 'Eurozone CPI', impact: 'Medium' },
    { date: '2024-07-02', event: 'US Nonfarm Payrolls', impact: 'High' },
    { date: '2024-07-03', event: 'Canada GDP', impact: 'Medium' },
    { date: '2024-07-04', event: 'Australia Trade Balance', impact: 'Low' },
    { date: '2024-07-05', event: 'China CPI', impact: 'High' },
    { date: '2024-07-06', event: 'Japan GDP', impact: 'Medium' },
];

const EconomicCalendar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const AnimatedTableRow = styled(TableRow)({
        transition: 'background-color 0.3s, transform 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            transform: 'scale(1.02)',
        },
    });

    return (
        <Box sx={{ marginTop: 20, mx: 'auto', maxWidth: '90%', textAlign: 'center', marginLeft: isMobile ? 0 : 30 }}>
            <Typography variant="h6" component="div" sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
                Economic Calendar
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {events.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
                            <Typography variant="subtitle1" fontWeight="bold">{event.date}</Typography>
                            <Typography variant="body1">{event.event}</Typography>
                            <Typography variant="body2" color={event.impact === 'High' ? 'error' : event.impact === 'Medium' ? 'warning' : 'textSecondary'}>{event.impact}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EconomicCalendar;
