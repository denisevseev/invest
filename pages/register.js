import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const { referralCode } = router.query; // Получаем реферальный код из URL
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

        // Проверяем, был ли предоставлен реферальный код
        const apiEndpoint = referralCode
            ? '/api/registerInvestor' // Регистрация инвестора через реферальный код
            : '/api/registerEmployee'; // Регистрация сотрудника без реферального кода

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, referralCode })
            });

            if (response.ok) {
                alert('Регистрация успешна');
                router.push('/login');
            } else {
                const errorData = await response.json();
                console.error('Registration error:', errorData);
                alert('Ошибка при регистрации');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Ошибка при регистрации');
        }
    };

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                {referralCode ? 'Регистрация инвестора' : 'Регистрация сотрудника'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="firstName"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Фамилия"
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
                    label="Пароль"
                    name="password"
                    fullWidth
                    required
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Номер телефона"
                    name="phoneNumber"
                    fullWidth
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Button type="submit" color="primary" fullWidth>
                    Зарегистрироваться
                </Button>
            </Box>
        </Container>
    );
};

export default Register;
