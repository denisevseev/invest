import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
const MyApp = ({ Component, pageProps }) => {

    let isSignUpPage
    if(Component.name === "SignUp" || Component.name === "Login") {
        isSignUpPage = true
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