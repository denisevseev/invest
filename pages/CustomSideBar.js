import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Collapse, Box, styled } from '@mui/material';
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

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        top: 88
    },
}));

const CustomSideBar = ({ mobileOpen }) => {
    const router = useRouter();
    const [openAccounts, setOpenAccounts] = useState(false);
    const [openFunds, setOpenFunds] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

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
        store.routeLink = text
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
                    <ListItem button onClick={handleClickAccounts}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accounts" />
                        {openAccounts ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openAccounts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {[...Array(5)].map((_, index) => (
                                <ListItem button sx={{ pl: 4 }} key={index} onClick={() => handleText(`Account ${index + 1}`)}>
                                    <ListItemText primary={`Account ${index + 1}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickFunds}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Funds" />
                        {openFunds ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openFunds} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {[...Array(5)].map((_, index) => (
                                <ListItem button sx={{ pl: 4 }} key={index} onClick={() => handleText(`Fund ${index + 1}`)}>
                                    <ListItemText primary={`Fund ${index + 1}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickProfile}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {['Profile', 'Upload Documents', 'My Agreements', 'Messages', 'Help Desk', 'Two-factor authentication', 'Instant Message', 'Personal Information', 'Individual Questionnaire'].map((text, index) => (
                                <ListItem button sx={{ pl: 4 }} key={index} onClick={() => handleText(text)}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => handleText('Downloads')}>
                        <ListItemIcon>
                            <CloudDownloadIcon />
                        </ListItemIcon>
                        <ListItemText primary="Downloads" />
                    </ListItem>
                    <ListItem button onClick={() => handleText('Economic Calendar')}>
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
