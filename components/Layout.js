import React, { useEffect, useState } from 'react';
import { Typography, Drawer, Box, CssBaseline, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import { useSession } from 'next-auth/react';
import InvestmentCalculator from "./InvestmentCalculator/InvestmentCalculator";
import { useRouter } from 'next/router';
import AppBarComponent from "./AppBar";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";
import CustomSideBar from "../pages/CustomSideBar";
import Login from "../pages/login";
import Footer from "./Footer";
import useFetchUser from "../stores/hooks/useFetchUser";

const drawerWidth = 200;

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  // const { user, loading } = useFetchUser();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    if (!session) {
        console.log(11)
        return (
            <div>
                <AppBarComponent/>
                <RiskAcceptanceModal open={open} show={true} onClose={handleClose}/>
                    <Login/>
                <Footer/>
            </div>
        );
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent />
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', mt: isMobile ? '60px' : '80px' },
        }}
      >
        <CustomSideBar/>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, height: '100vh', bgcolor: 'background.default', p: 0, mt: isMobile ? '60px' : '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: '100%' }}>
          {session ? (
            <>
              <InvestmentCalculator />
            </>
          ) : (
           <div>
           </div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
