import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, useMediaQuery, useTheme, Drawer } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useSession } from 'next-auth/react';
import store from './../stores/userStore'
import {observer} from "mobx-react-lite";

const drawerWidth = 240;

const DefaultSideBar = ({}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const [mobileOpen, setMobileOpen] = useState(false);
    const links = [
        { text: 'Home', href: 'https://victorum-capital.com', icon: <HomeIcon /> },
        { text: 'Trade', href: 'https://victorum-trade.com', icon: <AttachMoneyIcon /> },
        { text: 'Finance', href: 'https://vicpayments.com', icon: <AccountBalanceIcon /> }
    ];
    const { data: session } = useSession();

    const drawer = (
        <Box sx={{ overflow: 'auto', marginTop: 6, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
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
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? store.isOpenDefaultSideBar : true}
                onClose={() => store.isOpenDefaultSideBar = !store.isOpenDefaultSideBar}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default observer(DefaultSideBar);
