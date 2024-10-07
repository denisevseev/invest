import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useSession } from 'next-auth/react';
import useFetchUser from './../stores/hooks/useFetchUser';
import CircularProgress from "@mui/material/CircularProgress";

const LinkGenerator = () => {
    const { data: session } = useSession();
    const { user, loading: userLoading } = useFetchUser();
    const [referralLink, setReferralLink] = useState('');
    const [linkType, setLinkType] = useState('investor'); // Default to 'investor'
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user?.referralCode) {
            const link = 'register';
            setReferralLink(`${window.location.origin}/${link}?referralCode=${user.referralCode}&role=${linkType}`);
        }
    }, [user, linkType]);

    const generateLink = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/generateReferralLink', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: user._id, role: user.role, linkType })
            });

            if (!response.ok) throw new Error('Failed to generate referral link');

            const data = await response.json();
            const link = 'register';
            setReferralLink(`${window.location.origin}/${link}?referralCode=${data.referralCode}&role=${linkType}`);
        } catch (error) {
            console.error('Error generating referral link:', error);
        } finally {
            setLoading(false);
        }
    };

    if (userLoading) return <CircularProgress />;

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Link Generator
            </Typography>

            {user?.role === 'manager' && (
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="link-type-label">Link Type</InputLabel>
                    <Select
                        labelId="link-type-label"
                        value={linkType}
                        onChange={(e) => setLinkType(e.target.value)}
                        label="Link Type"
                    >
                        <MenuItem value="employee">Employee</MenuItem>
                        <MenuItem value="investor">Investor</MenuItem>
                    </Select>
                </FormControl>
            )}

            <Box>
                <Button
                    color="primary"
                    onClick={generateLink}
                    disabled={loading || !user}
                >
                    {loading ? 'Generating...' : 'Generate Link'}
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
