// pages/_app.js
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import UserInfoComponent from "../components/UserInfoComponent";
import RegistrationForm from "./RegistrationForm";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import ResetPassword from './ResetPassword';
import { dividerClasses } from '@mui/material';
import ResetPasswordForm from './ResetPasswordForm';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const MyApp = ({ Component, pageProps }) => {
    let isSignUpPage = false;


    if (Component.name === "SignUp" || Component.name === "Login" || Component.name === "RegistrationForm") {
        isSignUpPage = true;
    }
    if(Component.name == 'ResetPasswordForm'){
       return (<div>
        <ResetPasswordForm/>
       </div>)
    }

    if(Component.name === "RegistrationForm"){
        return (
            <SessionProvider session={pageProps.session}>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
                </Head>
                <ThemeProvider theme={theme}>
                    <RegistrationForm session={pageProps.session} />
                </ThemeProvider>
            </SessionProvider>
        )
    }

    if (Component.name === 'ResetPassword'){
        return (<>
        <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
                </Head>
                <ResetPassword/>
        </>)
    }

    if(Component.name === "Home"){
        return (
            <SessionProvider session={pageProps.session}>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
                </Head>
                <ThemeProvider theme={theme}>
                    <UserInfoComponent {...pageProps} />
                </ThemeProvider>
            </SessionProvider>
        )
    }

    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
            </Head>
            <ThemeProvider theme={theme}>
                {isSignUpPage ? (
                    <Component {...pageProps} />
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
