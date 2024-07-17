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

const drawerWidth = 200;

const AnimatedButton = styled(Button)(({ theme }) => ({
  minHeight: '6rem',
  minWidth: '30rem',
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
        <DefaultSideBar />
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
                <AnimatedButton
                  // onClick={() => router.push('/RegistrationForm')}
                  onClick={() => router.push('/InvestorAgreement')}
                  variant="outlined"
                  sx={{
                    mt: 2,
                  }}
                >
                  Investor Agreement
                </AnimatedButton>
              </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <AnimatedButton
                        onClick={() => router.push('/RegistrationForm')}
                        // onClick={() => router.push('/InvestorAgreement')}
                        variant="outlined"
                        sx={{
                            mt: 2,
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
