import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const VerificationInfo = () => {
    return (
        <Box sx={{ mt: 4, p: 2, ml:20, borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            {/*<Typography variant="h4" gutterBottom align="center">*/}
            {/*    Why Verification Matters*/}
            {/*</Typography>*/}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src="https://www.evidentid.com/wp-content/uploads/2019/01/1.-Instructional-Diagram.png" alt="Document Verification" style={{ width: '100%', borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        Verifying your identification documents, email, and phone number is crucial for ensuring the security and integrity of your account.
                        It helps prevent identity theft, ensures compliance with regulations, and provides a safe environment for all users.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        By verifying your information, you not only protect your own account but also contribute to a more secure digital ecosystem. This process
                        is quick and easy, and it significantly reduces the risk of fraud and unauthorized access.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Please take a moment to complete your profile by verifying your email, phone number, and uploading the necessary documents. This will
                        unlock all the features of our platform and ensure a smooth experience.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VerificationInfo;