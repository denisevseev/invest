// components/LinkGenerator.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import useFetchUser from './../stores/hooks/useFetchUser';

const LinkGenerator = () => {
    const { data: session } = useSession();
    const { user, loading } = useFetchUser();
    const [referralLink, setReferralLink] = useState('');

    useEffect(() => {
        if (user?.referralCode) {
            setReferralLink(`${window.location.origin}/register?referralCode=${user.referralCode}`);
        }
    }, [user]);

    const generateLink = async () => {
        const response = await fetch('/api/generateReferralLink', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user._id, role: user.role })
        });

        const data = await response.json();
        setReferralLink(`${window.location.origin}/register?referralCode=${data.referralCode}`);
    };

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Link Generator
            </Typography>
            <Box>
                <Button variant="contained" color="primary" onClick={generateLink}>
                    Generate Link
                </Button>
                {referralLink && (
                    <Box mt={2}>
                        <TextField
                            label="Referral Link"
                            fullWidth
                            value={referralLink}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default LinkGenerator;
