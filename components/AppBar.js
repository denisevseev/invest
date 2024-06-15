import React, { useState } from "react";
import { Box, Button, IconButton, Toolbar, AppBar, useTheme, useMediaQuery, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import CustomSideBar from "./../pages/CustomSideBar";

export default function AppBarComponent() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.reload();
    };

    return (
        <div>
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
                        <Button sx={{ color: 'black', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} onClick={handleLogout}>Logout</Button>
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
            {isMobile && (
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    <CustomSideBar mobileOpen={mobileOpen} />
                </Drawer>
            )}
        </div>
    );
}
