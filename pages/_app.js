import React, { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppBarLayout from '../components/AppBarLayout';
import UserLayout from "../components/UserLayout";
import UniversalModal from "../components/UniversalModal";
import Layout from "../components/Layout";

const theme = createTheme({
    typography: {
        fontFamily: 'Times New Roman, Times, serif',
    },
});

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    // Определение маршрутов
    const signUpPages = ['/signup', '/resetpassword', '/resetpasswordform', '/register', '/registerinvestor', '/registrationform'];
    const otherPages = ['/home', '/managers', '/', '/login'];
    const more = ['/more-info'];

    const currentPath = router.asPath.toLowerCase(); // Используем asPath для более точной проверки

    const isSignUpPage = signUpPages.includes(currentPath);
    const isOtherPage = otherPages.includes(currentPath);
    const ismore = more.includes(currentPath);



    debugger

    useEffect(() => {
        const mainHeader = document.querySelector('.mainHeader');
        if (mainHeader) {
            mainHeader.style.display = 'none';
        }
    }, []);

    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {isSignUpPage && (
                    <AppBarLayout>
                        <Component {...pageProps} />
                    </AppBarLayout>
                )}

                {isOtherPage && (
                    <UserLayout>
                        <Component {...pageProps} />
                    </UserLayout>
                )}


                {ismore && (
                    <div>
                        <Component {...pageProps} />
                    </div>
                )}

                <UniversalModal /> {/* Добавляем модальное окно */}
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
