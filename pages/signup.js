import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { signIn } from 'next-auth/react';
import Logo from '../components/Logo';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, password }),
      });

      if (response.ok) {
        // Регистрация успешна
        console.log('Registration successful:', response);

        // Автоматический вход после регистрации
        const signInResponse = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (signInResponse.ok) {
          // Перенаправление в личный кабинет
          router.push('/'); // Измените на путь к личному кабинету
        } else {
          setError('Login after registration failed.');
          console.error('Login error:', signInResponse.error);
        }
      } else {
        // Ошибка при регистрации
        const data = await response.json();
        setError(data.message || 'Registration failed');
        console.error('Registration error:', data.message || response.statusText);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Registration error:', error);
    }
  };

  return (
      <Container>
        <Logo />
        <Box style={{paddingTop: '8rem'}}>
          <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                margin="normal"
            />
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
          {error && (
              <Typography color="error" align="center" mt={2}>
                {error}
              </Typography>
          )}
          <Box mt={5} textAlign="center">
            <Typography>
              Already have an account?{' '}
              <Link href="/login" underline="hover">
                Log in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
  );
};

export default SignUp;
