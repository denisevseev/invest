// components/UserLayout.js
import React, { useState } from 'react';
import { Box, Container, useTheme, useMediaQuery, Grid } from '@mui/material';
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
import Notification from './Notification';
import store from '../stores/userStore';
import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import useFetchUser from './../stores/hooks/useFetchUser';
import Login from "../pages/login";

const UserLayout = ({ children }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const { data: session } = useSession();
    const { user, loading } = useFetchUser();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const renderComponent = () => {
        switch (selectedComponent) {
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
                return <EconomicalCalendar />;
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
                return <UserSurveyResults user={user} />; // Assuming UserSurveyResults is the correct component
            case 'My Agreements':
                return <Notification />; // Assuming Notification is the correct component
            case 'Investment Overview':
                return <Notification />; // Assuming Notification is the correct component
            case 'Share Subscription':
                return <UploadScansComponent />; // Assuming UploadScansComponent is the correct component
            case 'Identification Documents':
                return (
                    <Box p={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Notification />
                            </Grid>
                            <Grid item xs={12}>
                                <VerificationInfo />
                            </Grid>
                            <Grid item xs={12}>
                                <UploadScansComponent />
                            </Grid>
                        </Grid>
                    </Box>
                ); // Assuming combined components
            case 'Profile':
                return <Dashboard />; // Assuming Dashboard is the correct component
            case 'Presentation':
                return <Dashboard />; // Assuming Dashboard is the correct component
            case 'VicPay':
                return <Box>
                    <VictorumPayComponent />
                </Box>; // Assuming VictorumPayComponent is the correct component
            case 'Victorum Trade':
                return <VictorumTradeComponent />; // Assuming VictorumTradeComponent is the correct component
            case 'Corporate Finance':
                return <Dashboard />; // Assuming Dashboard is the correct component
            case 'Investments':
                return <Dashboard />; // Assuming Dashboard is the correct component
            case 'Consulting':
                return <Dashboard />; // Assuming Dashboard is the correct component
            case 'Economic Development':
                return <Dashboard />; // Assuming Dashboard is the correct component
            case 'Regulation Authority':
                return <RegulationAuthority />; // Assuming RegulationAuthority is the correct component
            case 'Share Type & Investors':
                return <Notification />; // Assuming Notification is the correct component
            case 'Shareholder Structure':
                return <Notification />; // Assuming Notification is the correct component
            case 'Corporate Announcements':
                return <Notification />; // Assuming Notification is the correct component
            case 'Corporate News':
                return <Notification />; // Assuming Notification is the correct component
            case 'Economical Calendar':
                return <EconomicalCalendar />; // Assuming EconomicalCalendar is the correct component
            case 'Live Currency Rates':
                return <LiveCurrencyRates />; // Assuming LiveCurrencyRates is the correct component
            case 'Live Crypto Rates':
                return <LiveCryptoRates />; // Assuming LiveCryptoRates is the correct component
            case 'Contact Center':
                return <Notification />; // Assuming Notification is the correct component
            case 'FAQ':
                return <Notification />; // Assuming Notification is the correct component
            case 'Change Password':
                return <Notification />; // Assuming Notification is the correct component
            default:
                return <Dashboard/>;
        }
    };

    if (!session) {
        return (
            <div>
                <AppBarComponent />
                {store.RiskAcceptanceModal && <RiskAcceptanceModal />}
                <Login />
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <AppBarComponent />
            <div>
                {!isMobile  && !isTablet && <CustomSideBar onMenuItemClick={setSelectedComponent} />}
                <main >
                    {renderComponent()}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default observer(UserLayout);
