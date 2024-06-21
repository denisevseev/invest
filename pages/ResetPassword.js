import { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/sendResetPasswordEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setError(null);
            } else {
                setError(data.error);
                setMessage('');
            }
        } catch (error) {
            setError('Ошибка при отправке запроса');
            setMessage('');
        }
    };

    return (
        <Container component={Paper} maxWidth="xs" sx={{ padding: '2rem', marginTop: '2rem' }}>
            <Typography variant="h4" gutterBottom align="center">
                Восстановление пароля
            </Typography>
            {message && (
                <Typography variant="body1" color="primary" align="center" sx={{ marginBottom: '1rem' }}>
                    {message}
                </Typography>
            )}
            {error && (
                <Typography variant="body1" color="error" align="center" sx={{ marginBottom: '1rem' }}>
                    {error}
                </Typography>
            )}
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите ваш email"
                    required
                    sx={{ marginBottom: '1rem' }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Отправить письмо
                </Button>
            </form>
        </Container>
    );
};

export default ResetPassword;
