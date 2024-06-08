import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {

    const isSignUpPage = Component.name === "SignUp"
    let a = 0

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