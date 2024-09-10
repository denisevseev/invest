import {useEffect, useState} from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('ResetPassword component rendered');
    }, []);

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
            setError('Error sending request');
            setMessage('');
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: 'url(/images/login.jpg)', // Укажите путь к изображению
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
            }}
        >
            <Container component={Paper} maxWidth="xs" sx={{ padding: '2rem', marginTop: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Password Reset
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
                        placeholder="Enter your email"
                        required
                        sx={{ marginBottom: '1rem' }}
                    />
                    <Button type="submit"  color="primary" fullWidth>
                        Send Email
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default ResetPassword;
