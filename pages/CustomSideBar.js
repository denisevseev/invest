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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useRouter } from 'next/router';
import store from "../stores/userStore";
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';
import useFetchUser from "../stores/hooks/useFetchUser";

const CustomSideBar = ({ positionMenu }) => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const { user, loading } = useFetchUser();
    store.lang =  user?.language
    const lang = store.lang;

    // Определение переводов на основе выбранного языка
    const translations = lang === 'de' ? de : en;

    // Функция для получения перевода текста
    const getText = (key) => {
        return translations.sidebar[key] || key;
    };

    // Функция для получения английского текста
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

    const handleText = (key) => {
        const text = getEnglishText(key);
        console.log('Clicked text:', text);
        setActiveMenuItem(text);
        store.routeLink = text; // сохраняем значение на английском языке
    };

    const StyledDrawer = styled(Drawer)(({ theme }) => ({
        '& .MuiDrawer-paper': {
            width: isMobile ? 260 : 200, // Увеличенная ширина
            boxSizing: 'border-box',
            // display: 'none',
        },
    }));

    const handleClick = () => {
        window.open('https://www.victorum-capital.com/wp-content/uploads/2021/12/Victorum_Catalog.pdf', '_blank');
    };

    return (
        <StyledDrawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
                position: 'absolute'
            }}
        >
            <Box sx={{ overflow: 'auto', marginTop: positionMenu && '6rem' }}>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {getText('investorMenu')}
                        </ListSubheader>
                    }
                >
                    <ListItem button onClick={handleClickProfile} selected={activeMenuItem.startsWith(getEnglishText('myProfile'))}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('myProfile')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('personalInformation')} selected={activeMenuItem === getEnglishText('personalInformation')}>
                                <ListItemText primary={getText('personalInformation')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('myAgreements')} selected={activeMenuItem === getEnglishText('myAgreements')}>
                                <ListItemText primary={getText('myAgreements')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('investmentOverview')} selected={activeMenuItem === getEnglishText('investmentOverview')}>
                                <ListItemText primary={getText('investmentOverview')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('shareSubscription')} selected={activeMenuItem === getEnglishText('shareSubscription')}>
                                <ListItemText primary={getText('shareSubscription')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('identificationDocuments')} selected={activeMenuItem === getEnglishText('identificationDocuments')}>
                                <ListItemText primary={getText('identificationDocuments')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickCompanyProfile} selected={activeMenuItem.startsWith(getEnglishText('companyProfile'))}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('companyProfile')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                        {openCompanyProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCompanyProfile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('profile')} selected={activeMenuItem === getEnglishText('profile')}>
                                <ListItemText primary={getText('profile')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={handleClick} selected={activeMenuItem === getEnglishText('presentation')}>
                                <ListItemText primary={getText('presentation')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('vicPay')} selected={activeMenuItem === getEnglishText('vicPay')}>
                                <ListItemText primary={getText('vicPay')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('victorumTrade')} selected={activeMenuItem === getEnglishText('victorumTrade')}>
                                <ListItemText primary={getText('victorumTrade')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickServices} selected={activeMenuItem.startsWith(getEnglishText('services'))}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('services')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                        {openServices ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openServices} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('corporateFinance')} selected={activeMenuItem === getEnglishText('corporateFinance')}>
                                <ListItemText primary={getText('corporateFinance')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('investments')} selected={activeMenuItem === getEnglishText('investments')}>
                                <ListItemText primary={getText('investments')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('consulting')} selected={activeMenuItem === getEnglishText('consulting')}>
                                <ListItemText primary={getText('consulting')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('economicDevelopment')} selected={activeMenuItem === getEnglishText('economicDevelopment')}>
                                <ListItemText primary={getText('economicDevelopment')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickRegulation} selected={activeMenuItem.startsWith(getEnglishText('regulation'))}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('regulation')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                        {openRegulation ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openRegulation} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('regulationAuthority')} selected={activeMenuItem === getEnglishText('regulationAuthority')}>
                                <ListItemText primary={getText('regulationAuthority')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('shareTypeInvestors')} selected={activeMenuItem === getEnglishText('shareTypeInvestors')}>
                                <ListItemText primary={getText('shareTypeInvestors')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('shareholderStructure')} selected={activeMenuItem === getEnglishText('shareholderStructure')}>
                                <ListItemText primary={getText('shareholderStructure')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('corporateAnnouncements')} selected={activeMenuItem === getEnglishText('corporateAnnouncements')}>
                                <ListItemText primary={getText('corporateAnnouncements')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickNews} selected={activeMenuItem.startsWith(getEnglishText('news'))}>
                        <ListItemIcon>
                            <TrendingUpIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('news')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                        {openNews ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openNews} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('corporateNews')} selected={activeMenuItem === getEnglishText('corporateNews')}>
                                <ListItemText primary={getText('corporateNews')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('economicalCalendar')} selected={activeMenuItem === getEnglishText('economicalCalendar')}>
                                <ListItemText primary={getText('economicalCalendar')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('liveCurrencyRates')} selected={activeMenuItem === getEnglishText('liveCurrencyRates')}>
                                <ListItemText primary={getText('liveCurrencyRates')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('liveCryptoRates')} selected={activeMenuItem === getEnglishText('liveCryptoRates')}>
                                <ListItemText primary={getText('liveCryptoRates')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClickHelp} selected={activeMenuItem.startsWith(getEnglishText('help'))}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary={getText('help')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                        {openHelp ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openHelp} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('contactCenter')} selected={activeMenuItem === getEnglishText('contactCenter')}>
                                <ListItemText primary={getText('contactCenter')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('faq')} selected={activeMenuItem === getEnglishText('faq')}>
                                <ListItemText primary={getText('faq')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('changePassword')} selected={activeMenuItem === getEnglishText('changePassword')}>
                                <ListItemText primary={getText('changePassword')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleText('shareSubscription')} selected={activeMenuItem === getEnglishText('shareSubscription')}>
                                <ListItemText primary={getText('shareSubscription')} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordBreak: 'break-word' } }} />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </StyledDrawer>
    );
};

export default CustomSideBar;
