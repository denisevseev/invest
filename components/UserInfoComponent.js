import React from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import AppBarComponent from "./AppBar";
import CustomSideBar from "../pages/CustomSideBar";
import UploadScansComponent from "./UploadScansComponent";
import UserSurveyResults from "./UserSurveyResults";
import Layout from "./Layout";
import EconomicCalendar from "../pages/EconomicCalendar";
import Login from "../pages/login";
import Footer from './Footer';
import OpenDemoAccount from '../pages/OpenDemoAccount';
import OpenLiveAccount from '../pages/OpenLiveAccount';
import useFetchUser from './../stores/hooks/useFetchUser';
import { observer } from "mobx-react-lite";
import { useSession } from 'next-auth/react';
import store from '../stores/userStore';
import Logo from './Logo';
import InvestorAgreement from "../pages/InvestorAgreement";
import Notification from "./Notification";


const UserInfoComponent = () => {
    
  const link = store.routeLink;

  const { data: session, status } = useSession();
  const { user, loading } = useFetchUser();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (loading && user) {
    return <div style={{textAlign: 'center', marginTop: '30rem'}}> <h1>Loading...</h1> </div>;
  }

  if (user?.phoneNumber && !user?.clientType) {
      debugger
    return (
      <Layout>
        <Layout />
        <Footer />
      </Layout>
    );
  }



  if (link === 'Economic Calendar' && user?.clientType) {
    return (
      <div>
        <AppBarComponent />
        {!isMobile && <CustomSideBar />}
        <EconomicCalendar />
        <Footer />
      </div>
    );
  }

  if (link === '/' && user?.clientType) {
    return (
      <div>
        <AppBarComponent />
          <Notification/>
        {!isMobile && <CustomSideBar />}
        <Footer />
      </div>
    );
  }

  if (link === "Upload Documents" && user?.clientType) {
    return (
      <div>
        <AppBarComponent />
          <Notification/>
        {!isMobile && <CustomSideBar />}
        <UploadScansComponent />
        <Footer />
      </div>
    );
  }

  if (link === "Open Demo Account" && user?.clientType) {
    return (
      <div>
        <AppBarComponent />
          <Notification/>
        {!isMobile && <CustomSideBar />}
        <OpenDemoAccount />
        <Footer />
      </div>
    );
  }

  if (link === "Open Live Account" && user?.clientType) {
    return (
      <div>
        <AppBarComponent />
        {!isMobile && <CustomSideBar />}
        <OpenLiveAccount />
        <Footer />
      </div>
    );
  }

  if (link === "Individual Questionnaire" && user?.clientType) {
    return (
      <div>
        <AppBarComponent />
        {!isMobile && <CustomSideBar />}
        {user && <UserSurveyResults user={user} />}
        <Footer />
      </div>
    );
  }

  if (!session) {
    return (
      <div>
        <AppBarComponent/>
            <Login />
        <Footer />
      </div>
    );
  }


  

  // return (
  //   <div>
  //     <AppBarComponent />
  //     {!isMobile && <CustomSideBar />}
  //     <Footer />
  //   </div>
  // );
};

export default observer(UserInfoComponent);
