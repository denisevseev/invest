import React, {useEffect, useState} from 'react';
import {Box, Typography, IconButton, useMediaQuery, useTheme, Container} from '@mui/material';
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
import AdminDashboard from '../pages/roles/AdminDashboard';
import StatisticsChart from "../pages/roles/StatisticsChart";
import Employees from "../pages/roles/Employees";
import Investors from "../pages/roles/Investors";
import LinkGenerator from "./LinkGenerator";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";


const UserInfoComponent = ({rout}) => {
  const link = store.routeLink;
  const { data: session, status } = useSession();
  const { user, loading } = useFetchUser();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };
  // debugger

  if (loading && user) {
    return <div style={{textAlign: 'center', marginTop: '30rem'}}> <h1>Loading...</h1> </div>;
  }

  if (user?.phoneNumber && !user?.clientType && user.role === 'investor') {
      console.log(1)
    return (
      <Layout>
        <Layout />
        <Footer />
      </Layout>
    );
  }


    if(user?.role &&  link === 'Managers'){
        return(
            <div>
                <AppBarComponent/>
                <AdminDashboard/>
            </div>
        )
    }
    if(user?.role &&  link === 'Employees'){
        return(
            <div>
                <AppBarComponent/>
                <Employees/>
            </div>
        )
    }
    if(user?.role &&  link === 'Investors'){
        return(
            <div>
                <AppBarComponent/>
                <Investors/>
            </div>
        )
    }

    if(user?.role &&  link === 'Link Generator'){
        return(
            <div>
                <AppBarComponent/>
                <LinkGenerator/>
            </div>
        )
    }


    // let inc =  ['investor' , ''].includes(user?.role);
  if(user && user?.role !== 'investor' &&  link === '/'  || link === 'Statistics' && user.role !== 'investor'){
      // debugger
      console.log(2)
    return(
      <div>
          <AppBarComponent/>
          <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <StatisticsChart/>
          </Container>
          <Footer/>
      </div>
    )
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


  if (link === '/' && user?.clientType && user.role === 'investor') {
      console.log(8)
      debugger
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
      console.log(5)
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
      console.log(4)
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
      console.log(3)
    return (
      <div>
        <AppBarComponent/>
            <Login />
          <RiskAcceptanceModal open={open} show={true} onClose={handleClose}/>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <AppBarComponent />
      {!session  ?  <Login/>:''}
      <Footer />
    </div>
  );
};

export default observer(UserInfoComponent);
