// pages/_app.js
import React, { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import AppBarLayout from '../components/AppBarLayout';
import Notification from '../components/Notification';
import InvestorAgreement from './InvestorAgreement';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import SignaturePad from './SignaturePad';
import LicenseAgreement from './LicenseAgreement';
import UserLayout from "../components/UserLayout";
import UniversalModal from "../components/UniversalModal";
import Layout from "../components/Layout"; // Импортируем модальное окно

// const theme = createTheme({
//     typography: {
//         fontFamily: 'Roboto, Arial, sans-serif',
//     },
// });

const theme = createTheme({
    typography: {
        fontFamily: 'Times New Roman, Times, serif', // Устанавливаем шрифт Times New Roman
    },
});


const MyApp = ({ Component, pageProps }) => {
    const isSignUpPage = [
        'Signup',
        'RegistrationForm',
        'ResetPassword',
        'ResetPasswordForm',
        'Register',
        'RegisterInvestor'
    ].includes(Component.name);

    const other = ['Home', 'Managers'].includes(Component.name);



    useEffect(() => {
        const mainHeader = document.querySelector('.mainHeader');
        if (mainHeader) {
            mainHeader.style.display = 'none';
        }
    }, []);



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
                    <SignaturePad />
                    <Footer />
                    <UniversalModal /> {/* Добавляем модальное окно */}
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
                    <UserLayout>
                        <Component rout={Component.name} {...pageProps} />
                    </UserLayout>
                ) : (
                    <UserLayout>
                        <Component rout={Component.name} {...pageProps} />
                    </UserLayout>
                    // <Layout>
                    //     <Component {...pageProps} />
                    // </Layout>
                )}
                <UniversalModal /> {/* Добавляем модальное окно */}
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
