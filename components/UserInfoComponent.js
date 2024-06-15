import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import AppBarComponent from "./AppBar";
import CustomSideBar from "../pages/CustomSideBar";
import InvestmentCalculator from "./InvestmentCalculator";
import UploadScansComponent from "./UploadScansComponent";
import store from "../stores/userStore";
import UserSurveyResults from "./UserSurveyResults";
import {observer} from "mobx-react-lite";
import * as storage from "mobx";

const UserInfoComponent = ({}) => {
    const link = store.routeLink
    const { data: session, status } = useSession();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchUser = async () => {
        if (session) {
            const response = await fetch('/api/userInfo');
            const data = await response.json();
            if(data){
                setUser(data)
                store.user = data
            }
        } else {
            // router.push('/login');
        }
    };


    useEffect(() => {
        fetchUser();
    }, [session, router]);


    // if (!session) {
    //     router.push('/login');
    //     return null; // Или можно вернуть null, чтобы ничего не рендерить до перенаправления
    // }

    if (store.user && (!user.companyName || !user.postalCode)) {
        return (
            <div>
                <AppBarComponent />
                <Box sx={{ marginLeft: isMobile ? 0 : 240, padding: 3 }}>
                    <InvestmentCalculator />
                </Box>
            </div>
        );
    }

    if (store.user && (!user.companyName || !user.postalCode)) {
        return (
            <div>
                <AppBarComponent />
                <Box sx={{ marginLeft: isMobile ? 0 : 240, padding: 3 }}>
                    <InvestmentCalculator />
                </Box>
            </div>
        );
    }

    if(link === "Upload Documents"){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <UploadScansComponent />
                {/*{user && (<UserSurveyResults user={user}/>)}*/}
            </div>
        );
    }

    if(link === "Personal Information"){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                {user && (<UserSurveyResults user={user}/>)}
            </div>
        );
    }




    return (
        <div>
            <AppBarComponent/>
            {isMobile === false && (<CustomSideBar/>)}
            {/*<UploadScansComponent />*/}
            {/*{user && (<UserSurveyResults user={user}/>)}*/}
        </div>
    );
};

export default observer(UserInfoComponent) ;
