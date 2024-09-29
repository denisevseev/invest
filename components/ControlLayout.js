import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import AppBarComponent from "./AppBar";
import Footer from "./Footer";
import store from "../stores/userStore"; // Подключение вашего MobX стора
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';

// Импортируем ваши компоненты
import AdminDashboard from "../pages/roles/AdminDashboard";
import Employees from "../pages/roles/Employees";
import Investors from "../pages/roles/Investors";
import StatisticsChart from "../pages/roles/StatisticsChart";
import AppBarControl from "./AppBarControl";
import LinkGenerator from "./LinkGenerator";

const ControlLayout = observer(({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (store.routeLink === 'brochure') {
            window.open('https://www.victorum-capital.com/wp-content/uploads/2021/12/Victorum_Catalog.pdf', '_blank');
        }
    }, [store.routeLink]);

    const renderContent = () => {
        switch (store.routeLink) {
            case '/':
                return <StatisticsChart />;
            case 'managers':
                return <AdminDashboard />;
            case 'employees':
                return <Employees />;
            case 'investors':
                return <Investors />;
            case 'link-generator':
                return <LinkGenerator />;
            default:
                return <StatisticsChart />;
        }
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* Верхняя панель */}
            <AppBarControl />

            {/* Основной контент */}
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} ml={30} md={12}>
                    <main>
                        {renderContent()}
                        {children}
                    </main>
                </Grid>
            </Grid>

            {/* Футер */}
            <Footer />
        </Box>
    );
});

export default ControlLayout;
