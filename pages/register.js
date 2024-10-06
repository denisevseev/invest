import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import RiskAcceptanceModal from "../components/RiskAcceptance/RiskAcceptanceModal";
import { useSession } from 'next-auth/react';

const Register = () => {
    const router = useRouter();
    const { referralCode } = router.query; // Get referral code from query params
    const { data: session } = useSession(); // Get current session information
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Determine the appropriate endpoint based on the logged-in user's role or referralCode
        const apiEndpoint = session?.user?.role === 'employee' || referralCode
            ? '/api/registerInvestor'
            : '/api/registerEmployee';

        debugger

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, referralCode })
        });

        if (response.ok) {
            alert('Registration successful');
            router.push('/login');
        } else {
            alert('Error during registration');
        }
    };

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                {referralCode ? 'Investor Registration' : 'Employee Registration'}
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
                <Button type="submit" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Register;
