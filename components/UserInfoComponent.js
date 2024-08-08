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
import Dashboard from './dashboard/Dashboard';
import RegulationAuthority from "./RegulationAuthority";
import VerificationInfo from "./VerificationInfo";
import VerificationOverview from "./VerificationOverview";
import VictorumTradeComponent from "./VictorumTradeComponent";
import VictorumPayComponent from "./VictorumPayComponent";



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
        case '/':
            if (user?.clientType) {
                console.log('036')
                return (
                    <div>
                        <AppBarComponent />
                        {/*<Notification />*/}
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        {user && <Dashboard/>}
                    </div>
                );
            }
        case 'Regulation Authority':
            if (user?.clientType) {
                console.log('0363')
                return (
                    <div>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        {user && <RegulationAuthority/>}
                    </div>
                );
            }

        case 'Profile':
            if (user?.clientType) {
                console.log('0323')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }
        case 'Corporate Finance':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }
        case 'Investments':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }

        case 'Consulting':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }
        case 'Economic Development':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }

        case 'Share Type & Investors':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }
        case 'Share Type & Investors':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }
        case 'Shareholder Structure':
            if (user?.clientType) {
                console.log('03023')
                return (
                    <Box>
                        <AppBarComponent />
                        <Box ml={!isMobile&&30} mt={15}>
                            <Notification/>
                        </Box>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                    </Box>
                );
            }

        case 'VicPay':
            if (user?.clientType) {
                console.log('03363')
                return (
                    <Container>
                        <AppBarComponent />
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        {user && <VictorumPayComponent/>}
                    </Container>
                );
            }


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
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            padding: isMobile ? '0 20px' : '0 40px',
                            marginTop: '80px',
                            marginLeft: '10%'
                        }}>
                            <div style={{width: '100%', marginLeft: !isMobile && '2rem', paddingLeft: !isMobile && '2rem'}}>
                                {/*<div style={{ display: 'flex'}}>*/}
                                    {/*<div style={{ flex: 2 }}>*/}
                                        <Notification />
                                    {/*</div>*/}
                                    {/*<div style={{ flex: 2 }}>*/}
                                    {/*    {!isMobile && <VerificationOverview />}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                <VerificationInfo />
                                <UploadScansComponent />
                            </div>
                            {!isMobile && <CustomSideBar positionMenu={true} />}
                        </div>
                        <Footer />
                    </div>
                );
            }
            break;

        case 'Victorum Trade':
            if (user?.clientType) {
                return (
                    <div>
                        <AppBarComponent/>
                        {!isMobile && <CustomSideBar positionMenu={true} />}
                        <VictorumTradeComponent />
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
                    <CustomSideBar/>
                </div>
            );
    }
};

export default observer(UserInfoComponent);




