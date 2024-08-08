// UserLayout.js
import React, { useState } from 'react';
import AppBarComponent from './AppBar';
import Footer from './Footer';
import CustomSideBar from '../pages/CustomSideBar';
import Notification from '../components/Notification';

const UserLayout = ({ children }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'DashboardComponent':
                return <Notification />;
            case 'StatisticsComponent':
                return <div>sdfsdf</div>
            case 'SettingsComponent':
                return <div>222</div>
            default:
                return null;
        }
    };

    return (
        <div>
            <AppBarComponent />
            <div style={{ display: 'flex', marginTop: '15rem' }}>
                <CustomSideBar onMenuItemClick={setSelectedComponent} />
                <main style={{ marginLeft: '200px', flexGrow: 1 }}>
                    {children}
                    {renderComponent()}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default UserLayout;
