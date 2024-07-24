import React, { useEffect, useState } from 'react';
import { Typography, Drawer, Box, CssBaseline, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useSession } from 'next-auth/react';
import InvestmentCalculator from "./InvestmentCalculator";
import { useRouter } from 'next/router';
import AppBarComponent from "./AppBar";
import DefaultSideBar from "./DefaultSideBar";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";
import CustomSideBar from "../pages/CustomSideBar";

const drawerWidth = 200;

const AnimatedButton = styled(Button)(({ theme }) => ({
  minHeight: '5rem',
  minWidth: '22rem',
}));

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { text: 'Home', href: 'https://victorum-capital.com', icon: <HomeIcon /> },
    { text: 'Trade', href: 'https://victorum-trade.com', icon: <AttachMoneyIcon /> },
    { text: 'Finance', href: 'https://vicpayments.com', icon: <AccountBalanceIcon /> }
  ];
  const { data: session } = useSession();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


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
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                {/*<AnimatedButton*/}
                {/*  // onClick={() => router.push('/RegistrationForm')}*/}
                {/*  onClick={() => router.push('/InvestorAgreement')}*/}
                {/*  variant="outlined"*/}
                {/*  sx={{*/}
                {/*    mt: 2,*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Investor Agreement*/}
                {/*</AnimatedButton>*/}
              </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <AnimatedButton
                        onClick={() => router.push('/RegistrationForm')}
                        variant="outlined"
                        sx={{
                            mt: 2,
                            px: 4, // Horizontal padding
                            py: 2, // Vertical padding
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            borderRadius: '12px', // Rounded corners
                            borderColor: 'rgba(0, 0, 255, 0.8)', // Semi-transparent blue border
                            background: 'rgba(255, 255, 255, 0)', // Transparent background
                            color: 'rgba(0, 0, 255, 0.8)', // Semi-transparent blue text color
                            textTransform: 'uppercase',
                            transition: 'transform 0.3s, box-shadow 0.3s, background 0.3s, color 0.3s',
                            '&:hover': {
                                background: 'rgba(0, 0, 255, 0.1)', // Light blue background on hover
                                color: 'rgba(0, 0, 255, 1)', // Solid blue text color on hover
                                borderColor: 'rgba(0, 0, 255, 1)', // Solid blue border color on hover
                                transform: 'scale(1.05)', // Slightly larger on hover
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow effect on hover
                            },
                            '&:active': {
                                transform: 'scale(0.98)', // Slightly smaller on click
                                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)', // Smaller shadow on click
                            },
                        }}
                    >
                        Become an investor
                    </AnimatedButton>
                </Box>
            </>
          ) : (
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3">
                  Please log in to use the invest calculator.
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
