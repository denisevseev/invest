import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container, TextField, useMediaQuery, useTheme, Button, Typography, Link, Box } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import Logo from '../components/Logo';
import useFetchUser from "../stores/hooks/useFetchUser";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();
    const { data: session } = useSession();

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Валидация полей
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Проверяем reCAPTCHA
        // if (!recaptchaValue) {
        //     setError('Please complete the reCAPTCHA');
        //     return;
        // }

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
            // recaptchaValue,  // Передаем значение reCAPTCHA на сервер
        });

        if (result.error) {
            setError(result.error);
            console.error('Login error:', result.error);
        } else {
            console.log('Login successful:', result);
            router.push('/');
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: 'url(/images/login.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
            }}
        >
            <Container
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Полупрозрачный фон для формы
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: !isMobile ? '50%' : '100%',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    {/*<ReCAPTCHA*/}
                    {/*    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}  // Use environment variable for site key*/}
                    {/*    onChange={handleRecaptchaChange}*/}
                    {/*/>*/}
                    <Button type="submit" variant="outlined" sx={{marginTop: '1rem'}} color="primary" fullWidth>
                        Sign In
                    </Button>
                </form>
                {error && <Typography color="error">{error}</Typography>}
                <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ marginLeft: '1rem' , fontSize: '0.9rem' }}>
                        <Link href="/ResetPassword" underline="true">
                            Forgot Password
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
