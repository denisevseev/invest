import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Grid } from '@mui/material';

const OpenDemoAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    tradingExperience: ''
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
    <Container sx={{marginTop: '10rem'}} component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Open Demo Account
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Fill in the details below to open your demo trading account and start trading.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Open Demo Account
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default OpenDemoAccount;
