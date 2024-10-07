import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Register = () => {
    const router = useRouter();
    const { referralCode, role } = router.query; // Получаем реферальный код и роль из query params
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiEndpoint = role === 'employee'
            ? '/api/registerEmployee' // Регистрация сотрудника
            : '/api/registerInvestor'; // Регистрация инвестора

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, referralCode })
        });

        if (response.ok) {
            alert('Registration successful');
            router.push('/login');
        } else {
            alert('Error during registration');
        }
    };

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                {role === 'employee' ? 'Employee Registration' : 'Investor Registration'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    name="password"
                    fullWidth
                    required
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    fullWidth
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Button type="submit" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Register;
