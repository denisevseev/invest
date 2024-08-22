import AppBarComponent from "./AppBar";
import CustomSideBar from "../pages/CustomSideBar";
import DataRequestModal from "./DataRequestModal";
import Footer from "./Footer";
import React from "react";
import SideMenu from "./SideMenu";
import {useRouter} from "next/router";
import store from "../stores/userStore";
import {useMediaQuery, useTheme} from "@mui/material";


const ControlLayout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const router = useRouter();
    const user = store.user;
    return (
        <div>
            <AppBarComponent />
            <div>
                {!isTablet && !isMobile && <SideMenu />}
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
export default ControlLayout;

