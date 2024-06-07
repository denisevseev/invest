import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline, Button, useMediaQuery, useTheme } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const drawerWidth = 240;

const Layout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const links = [
        { text: 'Victorum Group', href: 'https://victorum-group.com' },
        { text: 'Victorum Trade', href: 'https://victorum-trade.com' },
        { text: 'FAQ', href: 'https://victorum-faq.com' }
    ];
    const { data: session } = useSession();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: '100%', backgroundColor: 'white', height: isMobile ? '60px' : '80px' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', flexGrow: 1 }}>
                        <Box sx={{ height: isMobile ? '40px' : '65px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo.png" alt="Logo" layout="intrinsic" width={isMobile ? 150 : 220} height={isMobile ? 40 : 65} />
                        </Box>
                        {!isMobile && (
                            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>
                                welcome to the investor's personal cabinet
                            </Typography>
                        )}
                    </Box>
                    {session ? (
                        <>
                            <Avatar alt="User Avatar" src={session.user.image} sx={{ mr: 2 }} />
                            <Button sx={{ color: 'black' }} onClick={() => signOut()}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{ color: 'black' }} onClick={() => signIn()}>Login</Button>
                            <Link href="/signup" passHref>
                                <Button sx={{ color: 'black' }}>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', mt: isMobile ? '60px' : '80px' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
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
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: { sm: `${drawerWidth}px` }, mt: isMobile ? '60px' : '80px' }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
