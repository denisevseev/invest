import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const ResetPasswordForm = ({}) => {
  const router = useRouter();
  const { token, email } = router.query; // Getting token and email from query parameters
  debugger

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, email, password })
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
    <Container component={Paper} maxWidth="xs" sx={{ padding: '2rem', marginTop: '2rem' }}>
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="New Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit"  color="primary" fullWidth>
              Reset Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ResetPasswordForm;
