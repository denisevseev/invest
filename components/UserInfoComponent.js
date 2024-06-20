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
import Layout from "./Layout";
import EconomicCalendar from "../pages/EconomicCalendar";
import Login from "../pages/login";

const UserInfoComponent = ({}) => {
    const link = store.routeLink
    const { data: session, status } = useSession();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchUser = async () => {
        if(session && session.user) {
            const response = await fetch('/api/userInfo', {
                headers: {
                    'Authorization': `Bearer ${session}`
                }
            });
            const data = await response.json();
            // if(data.message === 'Unauthorized') {
            //     router.push('/login');
            // }
            if(data){
                setUser(data)
                store.user = data
            }
        }

    };


    useEffect(() => {
        fetchUser();
    }, [session, router]);


    if(user?.phoneNumber) { //если юзер с первичной регистрацией
        return (
            <Layout>
                <Layout/>
            </Layout>
        );
    }

    if(link === 'Economic Calendar'){
            return (<div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <EconomicCalendar/>
            </div>)
    }



    if (link === '/' && user?.clientType === 'corporate') {
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
            </div>
            )
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

    if(link === "Individual Questionnaire"){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                {user && (<UserSurveyResults user={user}/>)}
            </div>
        );
    }

    if(!session){
        return (
            <div>
                <Login/>
            </div>
        )
    }


    return (
        <div>
            <AppBarComponent/>
            {isMobile === false && (<CustomSideBar/>)}
        </div>
    )


};

export default observer(UserInfoComponent) ;
