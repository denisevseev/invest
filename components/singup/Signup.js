
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Logo from '../Logo';
import './Signup.module.css';
import axios from 'axios';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/auth/register', { name, phone, email, password });
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
    }

  };

  return (
      <div className={formContainer}>
        <Box justifyContent="left" mb={2}>
          <Logo />
        </Box>
        <Container style={{width:'40%'}} >
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
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
        </Container>
      </div>
  );
};

export default Signup;
