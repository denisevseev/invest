// pages/_app.js
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import UserInfoComponent from "../components/UserInfoComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import AppBarComponent from './../components/AppBar'
import AppBarLayout from '../components/AppBarLayout';



const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const MyApp = ({ Component, pageProps }) => {
    

    const isSignUpPage = ["SignUp", "Login", "RegistrationForm",  "ResetPassword", "ResetPasswordForm"].includes(Component.name); 
   

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
                {isSignUpPage  ? (
                    <AppBarLayout>
                         <Component {...pageProps} />
                    </AppBarLayout>
                
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
