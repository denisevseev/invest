// pages/_app.js
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import UserInfoComponent from '../components/UserInfoComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import AppBarLayout from '../components/AppBarLayout';
import Notification from '../components/Notification';
import InvestorAgreement from './InvestorAgreement';
import AppBarComponent from '../components/AppBar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import SignaturePad from './SignaturePad';
import LicenseAgreement from './LicenseAgreement';
import AdminDashboard from './roles/AdminDashboard';
import StatisticsChart from './roles/StatisticsChart';
import { Container } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const MyApp = ({ Component, pageProps }) => {
    debugger

    const isSignUpPage = [
        'SignUp',
        'Login',
        'RegistrationForm',
        'ResetPassword',
        'ResetPasswordForm',
        'Register',
        'RegisterInvestor'
    ].includes(Component.name);
    const other = ['Home', 'Managers'].includes(Component.name);


    if (Component.name === 'InvestorAgreement') {
        return (
            <SessionProvider session={pageProps.session}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <Logo />
                    <InvestorAgreement />
                    {/* <LicenseAgreement/> */}
                    <SignaturePad />
                    <Footer />
                </ThemeProvider>
            </SessionProvider>
        );
    }

    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {isSignUpPage ? (
                    <AppBarLayout>
                        <Component {...pageProps} />
                    </AppBarLayout>
                ) : other ? (
                    <UserInfoComponent rout = {Component.name} {...pageProps} />
                ) : (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;