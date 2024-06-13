import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline, Button, useMediaQuery, useTheme, IconButton, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuIcon from '@mui/icons-material/Menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from "./Logo";
import InvestmentCalculator from "./InvestmentCalculator";
import { useRouter } from 'next/router';
import AppBarComponent from "./AppBar";

const drawerWidth = 200;

const pulseKeyframes = `
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const AnimatedButton = styled(Button)(({ theme }) => ({
    animation: 'pulse 2s infinite',
    '&:hover': {
        transform: 'scale(1.1)',
    },
    '@keyframes pulse': pulseKeyframes
}));

const Layout = ({ children }) => {
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

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.reload();
    };

    const drawer = (
        <Box sx={{ overflow: 'auto', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <List>
                {links.map((link, index) => (
                    <ListItem
                        button
                        key={link.text}
                        component="a"
                        href={link.href}
                        sx={{
                            '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                            py: 3
                        }}
                    >
                        <ListItemIcon>
                            {link.icon}
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{
                                sx: {
                                    fontSize: '1.2rem',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                            primary={link.text}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarComponent/>
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
                {drawer}
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
                                <AnimatedButton onClick={() => router.push('/RegistrationForm')} variant="contained" sx={{ mt: 2 }}>
                                    Open Registration Form
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

export default Layout
