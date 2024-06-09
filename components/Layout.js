import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline, Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from "./Logo";
import InvestmentCalculator from "./InvestmentCalculator"; // исправьте импорт

const drawerWidth = 240;

const Layout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const links = [
        { text: 'Victorum Group', href: 'https://victorum-group.com' },
        { text: 'Victorum Trade', href: 'https://victorum-trade.com' },
        { text: 'FAQ', href: 'https://victorum-faq.com' }
    ];
    const { data: session } = useSession();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ overflow: 'auto', backgroundImage: 'url(/images/sidebar_background.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <List>
                {links.map((link, index) => (
                    <ListItem button key={link.text} component="a" href={link.href}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={link.text} />
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
                    backgroundImage: 'url(/images/img.png)', // путь к вашему изображению
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: isMobile ? '60px' : '80px',
                }}
            >
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', flexGrow: 1 }}>
                        <Logo />
                    </Box>
                    {session ? (
                        <>
                            <Avatar alt="User Avatar" src={session.user.image} sx={{ mr: 2 }} />
                            <Button sx={{ color: 'white', textShadow: '1px 1px 2px black' }} onClick={() => signOut()}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{ color: 'white', textShadow: '1px 1px 2px black' }} onClick={() => signIn()}>Login</Button>
                            <Link href="/signup" passHref>
                                <Button sx={{ color: 'white', textShadow: '1px 1px 2px black' }}>Sign Up</Button>
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
                    keepMounted: true, // Better open performance on mobile.
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
                sx={{ flexGrow: 1,   height: '100vh', bgcolor: 'background.default', p: 4, ml: 5, mt: isMobile ? '60px' : '80px' }}
            >
                {session ? <InvestmentCalculator /> : <Typography>Please log in to use the invest calculator.</Typography>}
            </Box>
        </Box>
    );
};

export default Layout;
