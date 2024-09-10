import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Grid } from '@mui/material';

const OpenLiveAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    tradingExperience: '',
    employmentStatus: '',
    annualIncome: '',
    netWorth: '',
    sourceOfFunds: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log('Form Data:', formData);
  };

  return (
      <Container sx={{ marginTop: '10rem' }} component="main" maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Open Live Account
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fill in the details below to open your live trading account and start trading.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, height: 1/9 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="firstName"
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    sx={{ height: 1/9 }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="country"
                    label="Country"
                    fullWidth
                    variant="outlined"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="address"
                    label="Address"
                    fullWidth
                    variant="outlined"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="state"
                    label="State/Province"
                    fullWidth
                    variant="outlined"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="zip"
                    label="ZIP/Postal Code"
                    fullWidth
                    variant="outlined"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    name="tradingExperience"
                    label="Trading Experience"
                    fullWidth
                    variant="outlined"
                    value={formData.tradingExperience}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="employmentStatus"
                    label="Employment Status"
                    fullWidth
                    variant="outlined"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="annualIncome"
                    label="Annual Income"
                    fullWidth
                    variant="outlined"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="netWorth"
                    label="Net Worth"
                    fullWidth
                    variant="outlined"
                    value={formData.netWorth}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    name="sourceOfFunds"
                    label="Source of Funds"
                    fullWidth
                    variant="outlined"
                    value={formData.sourceOfFunds}
                    onChange={handleChange}
                    required
                    sx={{ height: '50%' }} // Установка высоты поля
                />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button type="submit"  color="primary" size="large">
                Open Live Account
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
  );
};

export default OpenLiveAccount;
