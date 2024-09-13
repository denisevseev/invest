import React, { useEffect } from 'react';
import { Box, useTheme, useMediaQuery, Grid } from '@mui/material';
import AppBarComponent from './AppBar';
import Footer from './Footer';
import CustomSideBar from '../pages/CustomSideBar';
import Dashboard from './dashboard/Dashboard';
import RegulationAuthority from './RegulationAuthority';
import VictorumTradeComponent from './VictorumTradeComponent';
import VictorumPayComponent from './VictorumPayComponent';
import UserSurveyResults from './UserSurveyResults';
import VerificationInfo from './VerificationInfo';
import UploadScansComponent from './UploadScansComponent';
import EconomicalCalendar from '../pages/EconomicalCalendar';
import LiveCurrencyRates from '../pages/LiveCurrencyRates';
import LiveCryptoRates from './LiveCryptoRates';
import AdminDashboard from '../pages/roles/AdminDashboard';
import StatisticsChart from '../pages/roles/StatisticsChart';
import Employees from '../pages/roles/Employees';
import Investors from '../pages/roles/Investors';
import LinkGenerator from './LinkGenerator';
import OpenLiveAccount from '../pages/OpenLiveAccount';
import RiskAcceptanceModal from './RiskAcceptance/RiskAcceptanceModal';
import Notification from './notification/Notification';
import store from '../stores/userStore';
import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import Login from "../pages/login";
import MyAgreements from "./MyAgreements";
import ShareSubscription from "./ShareSubscription";
import ChangePassword from "./ChangePassword";
import ContactDetails from "./ContactDetails";
import ResponsiveGrid from "./ResponsiveGrid";
import DataRequestModal from "./DataRequestModal";
import Profile from "./Profile";
import ShareType from "./SharType";
import Investments from "./Investments";
import {CorporateFare} from "@mui/icons-material";
import CorporateFinance from "./CorporateFinance";
import Consulting from "./Consulting";
import EconomicDevelopment from "./EconomicDevelopment";

const UserLayout = ({ children }) => {
    const { data: session, status } = useSession(); // Используем статус для отслеживания загрузки сессии
    const user = store.user;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    // Сохранение данных пользователя из локального хранилища
    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('user'));
        if (u) {
            store.user = u;
        }

        if (user?.investmentAmount) {
            store.investmentAmount = user.investmentAmount;
        }
    }, [user?.investmentAmount]);

    if (status === 'loading' || !user) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <h2>Loading ...</h2>
            </Box>
        );
        // return null
    }


    // Если сессии нет, отображаем компонент логина
    if (!session) {
        return (
            <div>
                <AppBarComponent />
                <Login />
            </div>
        );
    }

    const renderComponent = () => {
        switch (store.routeLink) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Regulation Authority':
                return <RegulationAuthority />;
            case 'Victorum Trade':
                return <VictorumTradeComponent />;
            case 'VicPay':
                return <VictorumPayComponent />;
            case 'User Survey Results':
                return <UserSurveyResults user={user} />;
            case 'Verification Info':
                return <VerificationInfo />;
            case 'Upload Scans':
                return <UploadScansComponent />;
            case 'Economical Calendar':
                return <EconomicalCalendar />
            case 'Live Currency Rates':
                return <LiveCurrencyRates />;
            case 'Live Crypto Rates':
                return <LiveCryptoRates />;
            case 'Admin Dashboard':
                return <AdminDashboard />;
            case 'Statistics Chart':
                return <StatisticsChart />;
            case 'Employees':
                return <Employees />;
            case 'Investors':
                return <Investors />;
            case 'Link Generator':
                return <LinkGenerator />;
            case 'Open Live Account':
                return <OpenLiveAccount />;
            case 'Personal Information':
                return <UserSurveyResults user={user} />;
            case 'My Agreements':
                return <MyAgreements />;
            case 'Share Subscription':
                return <ShareSubscription />;
            case 'Identification Documents':
                return (
                    <Box mt={12}  ml={!isMobile && !isTablet && 20}>
                        <Grid container spacing={2}>
                            <Grid ml={!isMobile && !isTablet && 12} item xs={12}>
                                <Notification />
                            </Grid>
                            <Grid item  ml={!isMobile && !isTablet && 15} xs={12}>
                                <VerificationInfo />
                            </Grid>
                            <Grid item ml={isTablet || isMobile ? 5 : 15} xs={10}>
                                <UploadScansComponent />
                            </Grid>
                        </Grid>
                    </Box>
                );
            case 'Profile':
                return <Profile/>;
            case 'Presentation':
                return <Dashboard />;
            case 'Corporate Finance':
                return <CorporateFinance />;
            case 'Investments':
                return <Investments />;
            case 'Consulting':
                return <Consulting />;
            case 'Economic Development':
                return <EconomicDevelopment />;
            case 'Share Type & Investors':
                return <ShareType/>;
            case 'Shareholder Structure':
                return <Notification />;
            case 'Corporate Announcements':
                return <Notification />;
            case 'Corporate News':
                return <Notification />;
            case 'Contact Center':
                return <ContactDetails />;
            case 'FAQ':
                return <ResponsiveGrid />;
            case 'Change Password':
                return <ChangePassword />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div>
            <AppBarComponent />
            <div>
                {!isTablet && !isMobile && <CustomSideBar />}
                <main>
                    {user?.clientType || user?.companyName ? renderComponent() : <DataRequestModal />}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default observer(UserLayout);
