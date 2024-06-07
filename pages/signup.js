import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { Container, TextField, Button, Typography } from '@mui/material';
import AmountSlider from "../components/SliderWithInput";

const Signup = ({ isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(password);
      const response = await axios.post('/api/auth/register', { email, password });
      alert(1);
      console.log('Received signup data:', response);
      setMessage(response.data.message);
      if (response.status === 201) {
        router.push('/'); // Перенаправление на корневой домен
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  if (isLoggedIn) {
    return (
        <Container>
         <AmountSlider/>
        </Container>
    );
  }

  return (
      <Container>
        <Typography variant="h4">Sign Up</Typography>
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
          <Button type="submit" variant="contained" color="primary">Sign Up</Button>
        </form>
        {message && <Typography color="error">{message}</Typography>}
      </Container>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      props: { isLoggedIn: true },
    };
  }
  return {
    props: { isLoggedIn: false },
  };
}

export default Signup;
