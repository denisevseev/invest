import React from "react";
import { useRouter } from 'next/router';
import AppBarComponent from './AppBar';
import Footer from "./Footer";

const AppBarLayout = ({ children }) => {
    const router = useRouter();
    debugger
    const isResetPasswordPage = router.pathname === '/ResetPassword';
    return (
        <div>
            <AppBarComponent />
            <main style={{ marginTop: isResetPasswordPage ? '1rem' : '15rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AppBarLayout;
