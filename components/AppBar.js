import React, { useState } from "react";
import { Box, Button, IconButton, Toolbar, AppBar, useTheme, useMediaQuery, Drawer, Typography, Divider, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Logo from "./Logo";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import Link from "next/link";
import SideMenu from "./SideMenu";
import store from "../stores/userStore";
import { observer } from "mobx-react-lite";
import useFetchUser from './../stores/hooks/useFetchUser';
import CustomSideBar from "../pages/CustomSideBar";

const AppBarComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null); // Добавлено для управления состоянием
    const { data: session } = useSession();
    const router = useRouter();
    const { user, loading } = useFetchUser();
    store.sessionUser = user;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        store.isOpenDefaultSideBar = !store.isOpenDefaultSideBar;
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.reload();
    };

    const handleLanguageMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageChange = async (language) => {
        setAnchorEl(null);
        try {
            const payload = {
                language,
                user,
            };

            await fetch('/api/change-language', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            router.push(router.asPath);
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };

    const handleMenuItemClick = (componentName) => {
        setSelectedComponent(componentName);
        setMobileOpen(false); // Закрытие меню после клика на мобильных устройствах
    };

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    store.roleTitle = user?.role;

    return (
        <Box sx={{ display: 'flex' }}>
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
                    {(session && (isMobile || isTablet)) && (
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
                    {!isMobile &&  <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Logo />
                    </Box>}
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        {session && !isMobile && (
                            <Typography
                                variant="body1"
                                sx={{ color: 'black' }}
                            >
                                {capitalizeFirstLetter(store?.roleTitle)}
                            </Typography>
                        )}
                    </Box>
                    {session ? (
                        <>
                            {!isMobile && (
                                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                    <AccountCircleIcon sx={{ mr: 1 }} />
                                    <Typography variant="body1" sx={{ color: 'black', mr: 2 }}>
                                        {user?.companyName ? user.companyName : user?.firstName} {user?.companyName ? user.country : user?.lastName} / {user?.email}
                                    </Typography>
                                </Box>
                            )}
                            {!isMobile && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
                            <IconButton onClick={handleLanguageMenu}>
                                <img
                                    src={user?.language === 'de' ? "/images/germany_flag.png" : "/images/United-States-Flag.svg"}
                                    alt="Selected Flag"
                                    style={{ width: 20, height: user?.language === 'de' ? 13 : 20 }}
                                />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handleLanguageChange('de')}>
                                    <img src="/images/germany_flag.png" alt="German Flag" style={{ width: 20, height: 13, marginRight: 8 }} />
                                    Deutsch
                                </MenuItem>
                                <MenuItem onClick={() => handleLanguageChange('en')}>
                                    <img src="/images/United-States-Flag.svg" alt="UK Flag" style={{ width: 20, height: 20, marginRight: 8 }} />
                                    English
                                </MenuItem>
                            </Menu>
                            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                            <IconButton>
                                <HeadsetMicIcon />
                                {!isMobile && <Typography variant="body1" sx={{ ml: 1 }}>Help Desk</Typography>}
                            </IconButton>
                            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                            <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} onClick={handleLogout}>
                                <LogoutIcon />
                                {!isMobile && 'Logout'}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} onClick={() => router.push('/login')}>
                                Login
                            </Button>
                            <Link href="/signup" passHref>
                                <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant={(isMobile || isTablet) ? "temporary" : "permanent"}
                anchor="left"
                open={mobileOpen || !isMobile && !isTablet}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: isMobile ? 200 : 200, // Ensure consistent width
                        position: 'fixed', // Ensure the drawer is fixed position
                    },
                }}
            >
                {user?.role && (
                    isMobile || isTablet ? (
                        <CustomSideBar/>
                    ) : (
                        <SideMenu role={user.role} />
                    )
                )}
            </Drawer>
        </Box>
    );
};

export default observer(AppBarComponent);

