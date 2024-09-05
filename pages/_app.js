import React from 'react';
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
        fontFamily: 'DejaVu Sans, sans-serif',
    },
});

const MyAppContent = ({ Component, pageProps }) => {
    const router = useRouter();
    const { status } = useSession(); // Используем статус сессии
    const { user, loading } = useFetchUser(); // Используем хук для получения пользователя

    // Определение маршрутов
    const signUpPages = ['/signup', '/resetpassword',  '/resetpasswordform', '/register', '/registerinvestor', '/registrationform'];
    const otherPages = ['/home', '/managers', '/', '/login'];
    const more = ['/more-info'];

    // Получаем путь без query-параметров для сравнения
    const pathname = router.pathname.toLowerCase();
    const currentPath = router.asPath.toLowerCase();

    const isResetPasswordForm = pathname === '/resetpasswordform';
    const isResetPassword = pathname === '/resetpassword';
    const isSignUpPage = signUpPages.includes(pathname);
    const isOtherPage = otherPages.includes(pathname);
    const ismore = more.includes(pathname);

    // Показываем индикатор загрузки, пока данные о пользователе не загружены и сессия загружается
    if (loading || status === 'loading') {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    // Если пользователь не авторизован, обрабатываем страницы для неавторизованных пользователей
    if (status === 'unauthenticated') {
        if (isResetPasswordForm || isResetPassword || isSignUpPage ) {
            debugger
            return (
                <AppBarLayout>
                    <Component {...pageProps} />
                </AppBarLayout>
            )
        }

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

            <UniversalModal />
        </>
    );
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=DejaVu+Sans:wght@400;500;700&display=swap"
                />
                    <link rel="icon" href="/favicon.ico"/>
            </Head>
            <ThemeProvider theme={theme}>
                <MyAppContent Component={Component} pageProps={pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
