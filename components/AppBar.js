import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Toolbar, AppBar, useTheme, useMediaQuery, Drawer, Typography, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import FlagIcon from "@mui/icons-material/Flag";
import Logo from "./Logo";
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import SideMenu from "./SideMenu";
import store from "../stores/userStore";
import { observer } from "mobx-react-lite";
import DefaultSideBar from "./DefaultSideBar";
import useFetchUser from './../stores/hooks/useFetchUser';

const AppBarComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();
    const { user, loading } = useFetchUser();
    // let role =  user.rol




    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.reload();
    };
    store.roleTitle =  user?.role

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
                    {session && isMobile && (
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
                    <Box sx={{ flexGrow: 1, display: 'flex',  justifyContent: 'center' }}>
                        {session && !isMobile && (
                            <Typography variant="body1" sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
                                {store?.roleTitle}
                            </Typography>
                        )}
                    </Box>
                    {session ? (
                        <>
                            {!isMobile && (
                                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                    <AccountCircleIcon sx={{ mr: 1 }} />
                                    <Typography variant="body1" sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)', mr: 2 }}>
                                        {user?.companyName ? user.companyName : user?.firstName} {user?.companyName ? user.country : user?.lastName} / {user?.email}
                                    </Typography>
                                </Box>
                            )}
                            {!isMobile && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
                            {!isMobile && (
                                <IconButton>
                                    <FlagIcon />
                                </IconButton>
                            )}
                            {!isMobile && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
                            <IconButton>
                                <MailIcon />
                                {!isMobile && <Typography variant="body1" sx={{ ml: 1 }}>Messages</Typography>}
                            </IconButton>
                            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                            <IconButton>
                                <HeadsetMicIcon />
                                {!isMobile && <Typography variant="body1" sx={{ ml: 1 }}>Help Desk</Typography>}
                            </IconButton>
                            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                            <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} onClick={handleLogout}>
                                <LogoutIcon sx={{ mr: 1 }} />
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
                variant={isMobile ? "temporary" : "permanent"}
                anchor="left"
                open={isMobile ? mobileOpen : true}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box',   mt: isMobile ? '60px' : '80px' },
                }}
            >
                {user && user.role ? (
                    user.role === 'investor' ? <DefaultSideBar /> : <SideMenu role={user.role} />
                ) : (
                    <DefaultSideBar />
                )}

            </Drawer>
        </Box>
    );
}

export default observer(AppBarComponent);
