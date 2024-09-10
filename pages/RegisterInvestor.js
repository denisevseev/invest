// pages/registerInvestor.js
import React, {useEffect, useState} from 'react';
import {Container, TextField, Button, Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import { useRouter } from 'next/router';
import RiskAcceptanceModal from "../components/RiskAcceptance/RiskAcceptanceModal";

const RegisterInvestor = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { referralCode } = router.query;
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasAcceptedRisks = localStorage.getItem('riskModalShown') === 'true';
        if (!hasAcceptedRisks) {
            location.reload()
        }else {
            const response = await fetch('/api/registerInvestor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, referralCode })
            });

            if (response.ok) {
                alert('Investor registered successfully');
                router.push('/login');
            } else {
                alert('Error registering investor');
            }
        }

    };

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '25rem',  flexGrow: 1 }}>
            <RiskAcceptanceModal open={open} show={true} onClose={handleClose}/>
            <Typography variant="h6" align="center" gutterBottom>
                Investor Registration
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    name="password"
                    fullWidth
                    required
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    fullWidth
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Button type="submit"  color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default RegisterInvestor;
