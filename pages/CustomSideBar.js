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
    useTheme,
    useMediaQuery
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FolderIcon from '@mui/icons-material/Folder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HelpIcon from '@mui/icons-material/Help';
import GavelIcon from '@mui/icons-material/Gavel'; // New icon for regulation
import { useRouter } from 'next/router';
import store from "../stores/userStore";
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

const CustomSideBar = ({ positionMenu }) => {
    const router = useRouter();
    const theme = useTheme();
    const user = store.user;
    store.lang = user?.language;
    const lang = store.lang;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const translations = lang === 'de' ? de : en;

    const getText = (key) => {
        return translations.sidebar[key] || key;
    };

    const getEnglishText = (key) => {
        return en.sidebar[key] || key;
    };

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

    const handleText = (componentName) => {
        if (!user?.clientType || !user?.companyName) {
            store.DataRequestModal = true;
        }
        const text = getEnglishText(componentName);
        setActiveMenuItem(text);
        store.routeLink = text;
        window.scrollTo(0, 0);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 200,
                flexShrink: 0,
                fontSize: '40px',
                '& .MuiDrawer-paper': {
                    width: 270,
                    boxSizing: 'border-box',
                    position: 'fixed',
                    top: '80px', // Adjust this value to match your app bar height
                    height: 'calc(100% - 80px)',
                    boxShadow: '5px 2px 7px rgba(0, 0, 0, 0.3)', // Add shadow here
                    borderRadius: '4px' // Optionally, add rounde
                },
            }}
        >
            <Box sx={{ overflow: 'auto', marginTop: positionMenu && '6rem',  }} >
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {getText('investorMenu')}
                        </ListSubheader>
                    }
                >
                    {/* My Profile Section */}
                    <ListItem button onClick={handleClickProfile} selected={activeMenuItem.startsWith(getEnglishText('myProfile'))} sx={{ fontSize: '1rem' }}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('myProfile')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('personalInformation')} selected={activeMenuItem === getEnglishText('personalInformation')}>
                                <ListItemText primary={getText('personalInformation')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('myAgreements')} selected={activeMenuItem === getEnglishText('myAgreements')}>
                                <ListItemText primary={getText('myAgreements')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('shareSubscription')} selected={activeMenuItem === getEnglishText('shareSubscription')}>
                                <ListItemText primary={getText('shareSubscription')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('identificationDocuments')} selected={activeMenuItem === getEnglishText('identificationDocuments')}>
                                <ListItemText primary={getText('identificationDocuments')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Company Profile Section */}
                    <ListItem button onClick={handleClickCompanyProfile} selected={activeMenuItem.startsWith(getEnglishText('companyProfile'))} sx={{ fontSize: '1rem' }}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('companyProfile')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                        {openCompanyProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCompanyProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('profile')} selected={activeMenuItem === getEnglishText('profile')}>
                                <ListItemText primary={getText('profile')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => window.open('https://www.victorum-capital.com/wp-content/uploads/2021/12/Victorum_Catalog.pdf', '_blank', 'noopener,noreferrer')} selected={activeMenuItem === getEnglishText('presentation')}>
                                <ListItemText primary={getText('presentation')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('vicPay')} selected={activeMenuItem === getEnglishText('vicPay')}>
                                <ListItemText primary={getText('vicPay')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('victorumTrade')} selected={activeMenuItem === getEnglishText('victorumTrade')}>
                                <ListItemText primary={getText('victorumTrade')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Services Section */}
                    <ListItem button onClick={handleClickServices} selected={activeMenuItem.startsWith(getEnglishText('services'))} sx={{ fontSize: '1rem' }}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('services')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                        {openServices ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openServices} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('corporateFinance')} selected={activeMenuItem === getEnglishText('corporateFinance')}>
                                <ListItemText primary={getText('corporateFinance')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('investments')} selected={activeMenuItem === getEnglishText('investments')}>
                                <ListItemText primary={getText('investments')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('consulting')} selected={activeMenuItem === getEnglishText('consulting')}>
                                <ListItemText primary={getText('consulting')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('economicDevelopment')} selected={activeMenuItem === getEnglishText('economicDevelopment')}>
                                <ListItemText primary={getText('economicDevelopment')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Regulation Section */}
                    <ListItem button onClick={handleClickRegulation} selected={activeMenuItem.startsWith(getEnglishText('regulation'))} sx={{ fontSize: '1rem' }}>
                        <ListItemIcon>
                            <GavelIcon /> {/* Updated to GavelIcon for Regulation */}
                        </ListItemIcon>
                        <ListItemText primary={getText('regulation')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                        {openRegulation ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openRegulation} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('regulationAuthority')} selected={activeMenuItem === getEnglishText('regulationAuthority')}>
                                <ListItemText primary={getText('regulationAuthority')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('shareTypeInvestors')} selected={activeMenuItem === getEnglishText('shareTypeInvestors')}>
                                <ListItemText primary={getText('shareTypeInvestors')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>

                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('corporateAnnouncements')} selected={activeMenuItem === getEnglishText('corporateAnnouncements')}>
                                <ListItemText primary={getText('corporateAnnouncements')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* News Section */}
                    <ListItem button onClick={handleClickNews} selected={activeMenuItem.startsWith(getEnglishText('news'))} sx={{ fontSize: '1rem' }}>
                        <ListItemIcon>
                            <TrendingUpIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('news')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                        {openNews ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openNews} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('corporateNews')} selected={activeMenuItem === getEnglishText('corporateNews')}>
                                <ListItemText primary={getText('corporateNews')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('economicalCalendar')} selected={activeMenuItem === getEnglishText('economicalCalendar')}>
                                <ListItemText primary={getText('economicalCalendar')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('liveCurrencyRates')} selected={activeMenuItem === getEnglishText('liveCurrencyRates')}>
                                <ListItemText primary={getText('liveCurrencyRates')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('liveCryptoRates')} selected={activeMenuItem === getEnglishText('liveCryptoRates')}>
                                <ListItemText primary={getText('liveCryptoRates')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Help Section */}
                    <ListItem button onClick={handleClickHelp} selected={activeMenuItem.startsWith(getEnglishText('help'))} sx={{ fontSize: '1rem' }}>
                        <ListItemIcon>
                            <HelpIcon /> {/* Updated to HelpIcon */}
                        </ListItemIcon>
                        <ListItemText primary={getText('help')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                        {openHelp ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openHelp} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('contactCenter')} selected={activeMenuItem === getEnglishText('contactCenter')}>
                                <ListItemText primary={getText('contactCenter')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('faq')} selected={activeMenuItem === getEnglishText('faq')}>
                                <ListItemText primary={getText('faq')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('changePassword')} selected={activeMenuItem === getEnglishText('changePassword')}>
                                <ListItemText primary={getText('changePassword')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4, fontSize: '1rem' }} onClick={() => handleText('shareSubscription')} selected={activeMenuItem === getEnglishText('shareSubscription')}>
                                <ListItemText primary={getText('shareSubscription')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1rem' } }} />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    );
};

export default CustomSideBar;
