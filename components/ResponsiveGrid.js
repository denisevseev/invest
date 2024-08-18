import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';

const ResponsiveGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                padding: isMobile ? theme.spacing(2) : theme.spacing(4),
                textAlign: 'center',
            }}
            mt={8}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                        Frequently Asked Questions (FAQ)
                    </Typography>
                    <Box
                        component="img"
                        src="https://fineproxy.org/wp-content/uploads/2023/05/Frequently-Asked-Questions-FAQ.jpg" // Replace with your image path
                        alt="Sample"
                        sx={{
                            display: 'block',
                            width: isMobile ? '100%' : '85%',
                            maxHeight:  '400px', // Ограничение высоты до 400 пикселей для компьютеров
                            marginLeft: !isMobile && '12rem',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Grid ml={ !isMobile && 30} item xs={12} md={ isMobile ? 6 : 10}>
                    <Typography variant="body1" align="left" sx={{ color: 'text.secondary' }}>
                        <strong>1. What is the purpose of this application?</strong><br />
                        Our application provides a secure and user-friendly platform for managing your account and changing your password. It ensures that your personal information remains safe and helps you update your credentials easily.<br /><br />

                        <strong>2. How do I change my password?</strong><br />
                        To change your password, navigate to the "Change Password" section in your account settings. Enter your current password, then provide a new password and confirm it. Ensure that the new password is at least 8 characters long and matches the confirmation.<br /><br />

                        <strong>3. What should I do if I forget my password?</strong><br />
                        If you forget your password, use the "Forgot Password" link on the login page. Follow the instructions to reset your password via the email associated with your account.<br /><br />

                        <strong>4. What are the requirements for a strong password?</strong><br />
                        A strong password should be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters. Avoid using easily guessable information like common words or personal details.<br /><br />

                        <strong>5. Why is my new password not being accepted?</strong><br />
                        Ensure that your new password meets the minimum length requirement and matches the confirmation field. If the password still isn't accepted, verify that it meets all complexity requirements and try again.<br /><br />

                        <strong>6. How often should I change my password?</strong><br />
                        For security purposes, it's recommended to change your password every 3 to 6 months or immediately if you suspect that your account has been compromised.<br /><br />

                        <strong>7. What should I do if I encounter an error while changing my password?</strong><br />
                        If you encounter an error, check that you have entered all required fields correctly and that your new password meets the necessary criteria. If the problem persists, contact our support team for assistance.<br /><br />

                        <strong>8. How can I contact support for further assistance?</strong><br />
                        If you need further assistance, you can contact our support team via email at support@example.com or through the contact form on our website. We are here to help you with any issues or questions you may have.<br /><br />

                        <strong>9. Is my personal information secure?</strong><br />
                        Yes, your personal information is protected using industry-standard encryption and security measures. We take your privacy seriously and ensure that your data is handled with the utmost care.<br /><br />

                        <strong>10. Where can I find more information about your security policies?</strong><br />
                        You can find detailed information about our security policies in the "Privacy Policy" and "Terms of Service" sections on our website. If you have any specific questions, feel free to reach out to our support team.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResponsiveGrid;
