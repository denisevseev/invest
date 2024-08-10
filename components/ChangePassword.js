import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from '../stores/userStore';

const ChangePassword = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword.length < 8) {
            setError('New password must be at least 8 characters long.');
            return;
        }
        setUser(store.sessionUser);

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }

        try {
            const response = await fetch('/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldPassword,
                    newPassword,
                    user
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.message || 'An error occurred.');
            } else {
                alert('Password changed successfully');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <Box maxWidth={'md'} sx={{ mt: 12, p: 2, ml: !isMobile && 40 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Change Password
            </Typography>
            {/* Add your image here */}
            <Box textAlign="center" mb={4}>
                <img
                    src="/images/img_1.png" // Replace with your image path
                    alt="Change Password"
                    style={{ maxWidth: '10%', height: 'auto', borderRadius: 4 }}
                />
            </Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Old Password"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="New Password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Confirm New Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    {error && (
                        <Grid item xs={12}>
                            <Typography color="error">{error}</Typography>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Change Password
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default observer(ChangePassword);
