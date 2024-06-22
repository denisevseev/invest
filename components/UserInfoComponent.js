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
import ResetPassword from '../pages/ResetPassword';
import Footer from './Footer';
import OpenDemoAccount from '../pages/OpenDemoAccount';
import OpenLiveAccount from '../pages/OpenLiveAccount';
import SignUp from '../pages/signup';

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

    


    if(user?.phoneNumber && !user?.clientType) {
        return (
            <Layout>
                <Layout/>
                <Footer/>
            </Layout>
        );
    }
   




    if(link === 'Economic Calendar'  && user?.clientType){
            return (<div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <EconomicCalendar/>
                <Footer/>
            </div>)
    }



    if (link === '/' && user?.clientType) {
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <Footer/>
            </div>
            )
    }

    


    if(link === "Upload Documents"  && user?.clientType){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <UploadScansComponent />
                <Footer/>
            </div>
        );
    }

    if(link === "Open Demo Account"  && user?.clientType){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <OpenDemoAccount/>
                <Footer/>
            </div>
        );
    }

    if(link === "Open Live Account"  && user?.clientType){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                <OpenLiveAccount/>
                <Footer/>
            </div>
        );
    }



    if(link === "Individual Questionnaire" &&  user?.clientType){
        return (
            <div>
                <AppBarComponent/>
                {isMobile === false && (<CustomSideBar/>)}
                {user && (<UserSurveyResults user={user}/>)}
                <Footer/>
            </div>
        );
    }

   

    if(!session){
        return (
            <div>
                <Login/>
                <Footer/>
            </div>
        )
    }


    return (
        <div>
            <AppBarComponent/>
            {isMobile === false && (<CustomSideBar/>)}
            <Footer/>
        </div>
    )


};

export default observer(UserInfoComponent) ;
