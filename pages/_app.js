// pages/_app.js
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import UserInfoComponent from "../components/UserInfoComponent";
import RegistrationForm from "./RegistrationForm";

const MyApp = ({ Component, pageProps }) => {
    let isSignUpPage = false;

    if (Component.name === "SignUp" || Component.name === "Login" || Component.name === "RegistrationForm") {
        isSignUpPage = true;
    }

    if(Component.name === "RegistrationForm"){
        return (
            <SessionProvider session={pageProps.session}>
               <RegistrationForm session={pageProps.session} />
            </SessionProvider>
        )
    }
    if(Component.name === "Home"){
        return (
            <SessionProvider session={pageProps.session}>
            <UserInfoComponent {...pageProps} />
            </SessionProvider>
        )
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
