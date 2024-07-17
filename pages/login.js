import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Container, TextField, useMediaQuery, useTheme, Button, Typography, Link, Box } from '@mui/material';
import Logo from '../components/Logo';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

        // Если валидация прошла успешно, запускаем аутентификацию
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            setError(result.error);
            console.error('Login error:', result.error);
        } else {
            console.log('Login successful:', result);
            window.location.href = '/'
        }
    };

    return (
        <Container sx={{mt: 15}} >
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
                <Button type="submit" variant="contained"  color="primary" fullWidth>Sign In</Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
             <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            {/*<Typography sx={{ marginRight: '1rem' }}>*/}
            {/*    No account?{' '}*/}
            {/*    <Link href="/signup" underline="hover">*/}
            {/*        Sign up*/}
            {/*    </Link>*/}
            {/*</Typography>*/}

            <Typography sx={{ marginLeft: '1rem' }}>
                <Link href="/ResetPassword" underline="hover">
                    forgot password
                </Link>
            </Typography>
        </Box>

        
        </Container>
    );
};

export default Login;