import React from "react";
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

const ControlLayout = observer(({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const renderContent = () => {
        switch (store.routeLink) {
            case '/':
                return <StatisticsChart />; // Компонент для отображения статистики
            case 'managers':
                return <AdminDashboard />; // Компонент для администраторов
            case 'employees':
                return <Employees />; // Компонент для сотрудников
            case 'investors':
                return <Investors />; // Компонент для инвесторов
            default:
                return <StatisticsChart />;
        }
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* AppBarComponent уже управляет рендерингом меню */}
            <AppBarControl />
            <Grid container spacing={0}>
                {/* Боковое меню убрано из ControlLayout, так как оно рендерится через AppBarComponent */}
                <Grid item xs={12} sm={12} ml={30} md={12}>
                    <main>
                        {renderContent()}
                        {children}
                    </main>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
});

export default ControlLayout;
