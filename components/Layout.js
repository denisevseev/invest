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

const drawerWidth = 200;

const AnimatedButton = styled(Button)(({ theme }) => ({
    transition: 'transform 0.5s ease-in-out', // Добавляем анимацию перехода
    animation: '$pulse 2s infinite', // Добавляем анимацию пульсации
    // Убираем увеличение при наведении
    '&:hover': {
        transform: 'scale(1.1)', // Увеличиваем размер при наведении
    },
    '&:active': {
        transform: 'scale(0.95)', // Уменьшаем размер при нажатии
    },
}));

// Анимация пульсации
const pulse = {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
};

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
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    width: '100%',
                    height: isMobile ? '60px' : '80px',
                    background: 'white',
                }}
            >
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Logo />
                    </Box>
                    {session ? (
                        <>
                            <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} onClick={() => router.push('/login')}>Login</Button>
                            <Link href="/signup" passHref>
                                <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>


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
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}> {/* Center the button */}
                                <AnimatedButton size="large" onClick={() => router.push('/RegistrationForm')} variant="outlined" sx={{ mt: 2 }}>become an investor</AnimatedButton>
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