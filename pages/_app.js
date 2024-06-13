// pages/_app.js
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
    let isSignUpPage = false;

    if (Component.name === "SignUp" || Component.name === "Login" || Component.name === "RegistrationForm") {
        isSignUpPage = true;
    }

    return (
        <SessionProvider session={pageProps.session}>
            {isSignUpPage ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </SessionProvider>
    );
};

export default MyApp;
