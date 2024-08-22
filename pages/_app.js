import React, { useEffect } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppBarLayout from '../components/AppBarLayout';
import UserLayout from "../components/UserLayout";
import UniversalModal from "../components/UniversalModal";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useFetchUser from './../stores/hooks/useFetchUser';
import Layout from "../components/Layout";
import ControlLayout from "../components/ControlLayout";

const theme = createTheme({
    typography: {
        fontFamily: 'Times New Roman, Times, serif',
    },
});

const MyAppContent = ({ Component, pageProps }) => {
    const router = useRouter();
    const { status } = useSession(); // Используем статус сессии
    const { user, loading } = useFetchUser(); // Используем хук для получения пользователя

    // Определение маршрутов
    const signUpPages = ['/signup', '/resetpassword', '/resetpasswordform', '/register', '/registerinvestor', '/registrationform'];
    const otherPages = ['/home', '/managers', '/', '/login'];
    const more = ['/more-info'];

    const currentPath = router.asPath.toLowerCase(); // Используем asPath для более точной проверки

    const isSignUpPage = signUpPages.includes(currentPath);
    const isOtherPage = otherPages.includes(currentPath);
    const ismore = more.includes(currentPath);

    // Показываем индикатор загрузки, пока данные о пользователе не загружены и сессия загружается
    if (loading || status === 'loading') {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    // Если пользователь не авторизован, показываем обычные страницы
    if (status === 'unauthenticated') {
        return (
           <Layout pageProps={pageProps}>
               <Component {...pageProps} />
           </Layout>
        );
    }

    // Определяем лейаут в зависимости от роли пользователя
    if (user?.role && user.role !== 'investor') {
        return (
            <ControlLayout>
                <Component {...pageProps} />
            </ControlLayout>
        );
    }

    // Лейаут для авторизованных пользователей
    return (
        <>
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
        </>
    );
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <MyAppContent Component={Component} pageProps={pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
