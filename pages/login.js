import { useState } from 'react';
import { signIn } from 'next-auth/react';
import {Container, TextField, Button, Typography, Link, Box} from '@mui/material';
import Logo from '../components/Logo';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

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
        <Container  style={{paddingTop: '8rem'}} >
            <Logo/>
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
            <Box mt={5} textAlign="center">
                <Typography>
                    No account?{' '}
                    <Link href="/signup" underline="hover">
                        Sign up
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
