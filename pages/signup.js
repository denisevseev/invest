import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import useIsMobile from '../stores/hooks/useIsMobile';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { data: session } = useSession();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Валидация полей
    if (!firstName || !phoneNumber || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Проверка формата телефона (добавьте проверку, соответствующую вашему региону)
    if (!/^\+?\d{10,15}$/.test(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    try {
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ firstName, phoneNumber, email, password }),
      // });

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
    <Container sx={{mt: isMobile ? -10: 0}}>
      <Box>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
