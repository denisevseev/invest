import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { observer } from "mobx-react-lite";
import { useSession } from 'next-auth/react';
import store from '../stores/userStore';
import AppBarComponent from "./AppBar";
import CustomSideBar from "../pages/CustomSideBar";
import UploadScansComponent from "./UploadScansComponent";
import UserSurveyResults from "./UserSurveyResults";
import Layout from "./Layout";
import EconomicalCalendar from "../pages/EconomicalCalendar";
import Login from "../pages/login";
import Footer from './Footer';
import OpenDemoAccount from '../pages/OpenDemoAccount';
import OpenLiveAccount from '../pages/OpenLiveAccount';
import useFetchUser from './../stores/hooks/useFetchUser';
import Notification from "./Notification";
import AdminDashboard from '../pages/roles/AdminDashboard';
import StatisticsChart from "../pages/roles/StatisticsChart";
import Employees from "../pages/roles/Employees";
import Investors from "../pages/roles/Investors";
import LinkGenerator from "./LinkGenerator";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";
import LiveCurrencyRates from "../pages/LiveCurrencyRates";
import LiveCryptoRates from "./LiveCryptoRates";
import Dashboard from './Dashboard';



const UserInfoComponent = () => {
    const link = store.routeLink;
    const { data: session } = useSession();
    const { user, loading } = useFetchUser();
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    // if (loading) {
    //     console.log('09');
    //     return <div style={{ textAlign: 'center', marginTop: '30rem' }}> <h1>Loading...</h1> </div>;
    // }

    if (!session) {
        console.log('01');
        return (
            <div>
                <AppBarComponent />
                {store.RiskAcceptanceModal && <RiskAcceptanceModal />}
                <Login />
                <Footer />
            </div>
        );
    }

    if (user?.phoneNumber && !user?.clientType && user.role === 'investor') {
        console.log('02');
        return (
            <Layout>
                <Layout />
                <Footer />
            </Layout>
        );
    }

    switch (link) {
        case 'Managers':
            return (
                <div>
                    <AppBarComponent />
                    <AdminDashboard />
                </div>
            );
        case 'Employees':
            return (
                <div>
                    <AppBarComponent />
                    <Employees />
                </div>
            );
        case 'Investors':
            return (
                <div>
                    <AppBarComponent />
                    <Investors />
                </div>
            );
        case 'Link Generator':
            return (
                <div>
                    <AppBarComponent />
                    <LinkGenerator />
                </div>
            );
        case 'Statistics':
            if (user?.role !== 'investor') {
                return (
                    <div>
                        <AppBarComponent />
                        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <StatisticsChart />
                        </Container>
                        <Footer />
                    </div>
                );
            }
            break;
        case 'Economical Calendar':
            if (user?.clientType) {
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <div style={{ width: '100%', padding: '20px', marginLeft: isMobile ? '40%' : '-10%' }}>
                            <EconomicalCalendar />
                        </div>
                        <Footer />
                    </div>
                );
            }
            break;
        case 'Live Currency Rates':
            if (user?.clientType) {
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <LiveCurrencyRates />
                        <Footer />
                    </div>
                );
            }
            break;
        case '/':
            if (user?.clientType && user.role === 'investor') {
                console.log('033');
                return (
                    <div>
                        <AppBarComponent />
                        <Notification />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <Footer />
                    </div>
                );
            }
            break;
        case 'Identification Documents':
            if (user?.clientType) {
                return (
                    <div>
                        <AppBarComponent />
                        <Notification />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <UploadScansComponent />
                        <Footer />
                    </div>
                );
            }
            break;
        case 'Open Demo Account':
            if (user?.clientType) {
                return (
                    <div>
                        <AppBarComponent />
                        <Notification />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <OpenDemoAccount />
                        <Footer />
                    </div>
                );
            }
            break;
        case 'Open Live Account':
            if (user?.clientType) {
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <OpenLiveAccount />
                        <Footer />
                    </div>
                );
            }
            break;
        case 'Personal Information':
            if (user?.clientType) {
                console.log('033')
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        {user && <UserSurveyResults user={user} />}
                    </div>
                );
            }
            break;

        case 'Economic Development':
            if (user?.clientType) {
                console.log('036')
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        {user && <Dashboard/>}
                    </div>
                );
            }
            break;

        case 'Live Crypto Rates':
            if (user?.clientType) {
                console.log('0333')
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        {user && <LiveCryptoRates user={user} />}
                        <Footer />
                    </div>
                );
            }
            break;


        default:
            return (
                <div>
                    <AppBarComponent />
                    <div>sdf</div>
                    <Footer />
                </div>
            );
    }
};

export default observer(UserInfoComponent);
