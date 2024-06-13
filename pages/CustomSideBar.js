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

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        top: 88
    },
}));

const CustomSideBar = () => {
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

    return (
        <StyledDrawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
                // top: 0, // Убираем top
                marginTop: 64, //  Если нужен отступ, используем marginTop
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
                                <ListItem button sx={{ pl: 4 }} key={index}>
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
                                <ListItem button sx={{ pl: 4 }} key={index}>
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
                                <ListItem button sx={{ pl: 4 }} key={index}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem button>
                        <ListItemIcon>
                            <CloudDownloadIcon />
                        </ListItemIcon>
                        <ListItemText primary="Downloads" />
                    </ListItem>
                    <ListItem button>
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
                    <ListItem button>
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