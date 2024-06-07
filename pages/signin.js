import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Signin = () => {
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
            console.error('Signin error:', result.error);
        } else {
            console.log('Signin successful:', result);
        }
    };

    return (
        <Container>
            <Typography variant="h4">Sign In</Typography>
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
                <Button type="submit" variant="contained" color="primary">Sign In</Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
        </Container>
    );
};

export default Signin;
