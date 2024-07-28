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
    useTheme,
    useMediaQuery
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

const CustomSideBar = ({ positionMenu }) => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [openProfile, setOpenProfile] = useState(false);
    const [openCompanyProfile, setOpenCompanyProfile] = useState(false);
    const [openServices, setOpenServices] = useState(false);
    const [openRegulation, setOpenRegulation] = useState(false);
    const [openNews, setOpenNews] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const handleClickProfile = () => {
        setOpenProfile(!openProfile);
    };

    const handleClickCompanyProfile = () => {
        setOpenCompanyProfile(!openCompanyProfile);
    };

    const handleClickServices = () => {
        setOpenServices(!openServices);
    };

    const handleClickRegulation = () => {
        setOpenRegulation(!openRegulation);
    };

    const handleClickNews = () => {
        setOpenNews(!openNews);
    };

    const handleClickHelp = () => {
        setOpenHelp(!openHelp);
    };

    const handleText = (text) => {
        console.log('Clicked text:', text);
        setActiveMenuItem(text);
        store.routeLink = text;
        // Perform any actions with the clicked text here
    };

    const StyledDrawer = styled(Drawer)(({ theme }) => ({
        '& .MuiDrawer-paper': {
            width: isMobile ? 240 : 200,
            boxSizing: 'border-box',
        },
    }));

    return (
        <StyledDrawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
            }}
        >
            <Box sx={{ overflow: 'auto', marginTop: positionMenu && '6rem' }}>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            TRADER'S MENU
                        </ListSubheader>
                    }
                >
                    <ListItem button onClick={handleClickProfile} selected={activeMenuItem.startsWith('My Profile')}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Personal Information')} selected={activeMenuItem === 'Personal Information'}>
                                <ListItemText primary="Personal Information" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('My Agreements')} selected={activeMenuItem === 'My Agreements'}>
                                <ListItemText primary="My Agreements" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Investment Overview')} selected={activeMenuItem === 'Investment Overview'}>
                                <ListItemText primary="Investment Overview" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Share Subscription')} selected={activeMenuItem === 'Share Subscription'}>
                                <ListItemText primary="Share Subscription" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Identification Documents')} selected={activeMenuItem === 'Identification Documents'}>
                                <ListItemText primary="Identification Documents" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickCompanyProfile} selected={activeMenuItem.startsWith('Company Profile')}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Company Profile" />
                        {openCompanyProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCompanyProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Profile')} selected={activeMenuItem === 'Profile'}>
                                <ListItemText primary="Profile" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Presentation')} selected={activeMenuItem === 'Presentation'}>
                                <ListItemText primary="Presentation" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('VicPay')} selected={activeMenuItem === 'VicPay'}>
                                <ListItemText primary="VicPay" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Victorum Trade')} selected={activeMenuItem === 'Victorum Trade'}>
                                <ListItemText primary="Victorum Trade" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickServices} selected={activeMenuItem.startsWith('Services')}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                        {openServices ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openServices} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Corporate Finance')} selected={activeMenuItem === 'Corporate Finance'}>
                                <ListItemText primary="Corporate Finance" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Investments')} selected={activeMenuItem === 'Investments'}>
                                <ListItemText primary="Investments" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Consulting')} selected={activeMenuItem === 'Consulting'}>
                                <ListItemText primary="Consulting" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Economic Development')} selected={activeMenuItem === 'Economic Development'}>
                                <ListItemText primary="Economic Development" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickRegulation} selected={activeMenuItem.startsWith('Regulation')}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Regulation" />
                        {openRegulation ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openRegulation} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Regulation Authority')} selected={activeMenuItem === 'Regulation Authority'}>
                                <ListItemText primary="Regulation Authority" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Share Type')} selected={activeMenuItem === 'Share Type'}>
                                <ListItemText primary="Share Type" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Shareholder Structure')} selected={activeMenuItem === 'Shareholder Structure'}>
                                <ListItemText primary="Shareholder Structure" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Corporate Announcements')} selected={activeMenuItem === 'Corporate Announcements'}>
                                <ListItemText primary="Corporate Announcements" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickNews} selected={activeMenuItem.startsWith('News')}>
                        <ListItemIcon>
                            <TrendingUpIcon />
                        </ListItemIcon>
                        <ListItemText primary="News" />
                        {openNews ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openNews} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Corporate News')} selected={activeMenuItem === 'Corporate News'}>
                                <ListItemText primary="Corporate News" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Economical Calendar')} selected={activeMenuItem === 'Economical Calendar'}>
                                <ListItemText primary="Economical Calendar" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Live Currency Rates')} selected={activeMenuItem === 'Live Currency Rates'}>
                                <ListItemText primary="Live Currency Rates" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Live Crypto Rates')} selected={activeMenuItem === 'Live Crypto Rates'}>
                                <ListItemText primary="Live Crypto Rates" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickHelp} selected={activeMenuItem.startsWith('Help')}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                        {openHelp ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openHelp} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Contact Center')} selected={activeMenuItem === 'Contact Center'}>
                                <ListItemText primary="Contact Center" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('FAQ')} selected={activeMenuItem === 'FAQ'}>
                                <ListItemText primary="FAQ" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Change Password')} selected={activeMenuItem === 'Change Password'}>
                                <ListItemText primary="Change Password" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('Share Subscription')} selected={activeMenuItem === 'Share Subscription'}>
                                <ListItemText primary="Share Subscription" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </StyledDrawer>
    );
};

export default CustomSideBar;
