import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Collapse,
    Box,
    styled,
    useTheme, useMediaQuery
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FolderIcon from '@mui/icons-material/Folder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useRouter } from 'next/router';
import store from "../stores/userStore";
// const theme = useTheme();
// const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        // top: 10
    },
}));

const CustomSideBar = ({ mobileOpen }) => {
    const router = useRouter();
    const [openAccounts, setOpenAccounts] = useState(false);
    const [openFunds, setOpenFunds] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(''); // Add this line

    const handleClickAccounts = () => {
        setOpenAccounts(!openAccounts);
    };

    const handleClickFunds = () => {
        setOpenFunds(!openFunds);
    };

    const handleClickProfile = () => {
        setOpenProfile(!openProfile);
    };

    const handleText = (text) => {
        console.log('Clicked text:', text);
        setActiveMenuItem(text);
        store.routeLink = text;
        // Perform any actions with the clicked text here
    };

    return (
        <StyledDrawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
            }}
        >
            <Box sx={{ overflow: 'auto' }}>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            TRADER'S MENU
                        </ListSubheader>
                    }
                >
                    <ListItem button onClick={handleClickAccounts} selected={activeMenuItem.startsWith('Account')}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accounts" />
                        {openAccounts ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openAccounts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Open Demo Account')} selected={activeMenuItem === 'Open Demo Account'}>
                                <ListItemText primary="Open Demo Account" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Open Live Account')} selected={activeMenuItem === 'Open Live Account'}>
                                <ListItemText primary="Open Live Account" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Accounts Overview')} selected={activeMenuItem === 'Accounts Overview'}>
                                <ListItemText primary="Accounts Overview" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickFunds} selected={activeMenuItem.startsWith('Fund')}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Funds" />
                        {openFunds ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openFunds} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Deposit Funds')} selected={activeMenuItem === 'Deposit Funds'}>
                                <ListItemText primary="Deposit Funds" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Withdraw Funds')} selected={activeMenuItem === 'Withdraw Funds'}>
                                <ListItemText primary="Withdraw Funds" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Transfer Funds')} selected={activeMenuItem === 'Transfer Funds'}>
                                <ListItemText primary="Transfer Funds" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Transactions History')} selected={activeMenuItem === 'Transactions History'}>
                                <ListItemText primary="Transactions History" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Payment Details')} selected={activeMenuItem === 'Payment Details'}>
                                <ListItemText primary="Payment Details" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickProfile} selected={activeMenuItem.startsWith('Profile')}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {['Profile', 'Upload Documents', 'My Agreements', 'Messages', 'Help Desk', 'Two-factor authentication', 'Instant Message', 'Personal Information', 'Individual Questionnaire'].map((text, index) => (
                                <ListItem button sx={{ pl: 4 }} key={index} onClick={() => handleText(text)} selected={activeMenuItem === text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => handleText('Downloads')} selected={activeMenuItem === 'Downloads'}>
                        <ListItemIcon>
                            <CloudDownloadIcon />
                        </ListItemIcon>
                        <ListItemText primary="Downloads" />
                    </ListItem>
                    <ListItem button onClick={() => handleText('Economic Calendar')} selected={activeMenuItem === 'Economic Calendar'}>
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Economic Calendar" />
                    </ListItem>
                </List>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            TRADE NOW
                        </ListSubheader>
                    }
                >
                    <ListItem button onClick={() => handleText('MQ WebTrader - MT5')}>
                        <ListItemIcon>
                            <TrendingUpIcon />
                        </ListItemIcon>
                        <ListItemText primary="MQ WebTrader - MT5" />
                    </ListItem>
                </List>
            </Box>
        </StyledDrawer>
    );
};

export default CustomSideBar;
