import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, useTheme, useMediaQuery, CardMedia } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from '../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

const ChangePassword = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Определение текущего языка
    const language = store.lang === 'de' ? de : en;

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
                {language.changePassword.title}
            </Typography>
            {/* Add your image here */}
            <Box textAlign="center" mb={4}>
                <img
                    src="/images/img_1.png" // Replace with your image path
                    alt="Change Password"
                    style={{ maxWidth: '10%', height: 'auto', borderRadius: 4 }}
                />
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/pass.jpg" // Replace with the path to your image
                    alt="Change Password"
                    sx={{ mb: 4, borderRadius: 4 }}
                />
            </Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label={language.changePassword.oldPassword}
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label={language.changePassword.newPassword}
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label={language.changePassword.confirmPassword}
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
                    <Grid item xs={8} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button color="primary" type="submit">
                            {language.changePassword.button}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default observer(ChangePassword);
