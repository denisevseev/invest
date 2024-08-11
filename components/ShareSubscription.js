import React, {useState} from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, useTheme, useMediaQuery } from '@mui/material';
import store from "../stores/userStore";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";
import {observer} from "mobx-react-lite";

const ShareSubscription = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [showRisksModal, setShowRisksModal] = useState(false);
    const user = store.user;
    debugger
    const handleAcceptRisks = () => {
        store.acceptedRisks = true; // Сохраняем согласие на риски
        setShowRisksModal(false); // Закрываем модальное окно
    };
    const handleShow =()=>{
        setShowRisksModal(true)
    }

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Share Subscription
            </Typography>
            <CardMedia
                component="img"
                height="300"
                image="/images/shareS.jpg" // Replace with the path to your image
                alt="Share Subscription"
                sx={{ mb: 4 }}
            />
            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Subscribing to shares allows investors to become partial owners of a company, granting them a stake in the company’s profits and the ability to influence corporate decisions. By subscribing to new shares, investors can support the company’s growth while potentially earning dividends and benefiting from the appreciation of the share price.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Share subscription is a key strategy for those looking to diversify their investment portfolio, offering a mix of income through dividends and capital gains from stock price increases. It's important to carefully assess the company’s performance, industry trends, and your financial goals before making a subscription decision.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Whether you are a seasoned investor or new to the market, subscribing to shares can be a valuable addition to your investment strategy, helping you to build wealth over the long term.
                </Typography>
                <Box textAlign="center" mt={4}>
                    <Button onClick={handleShow} variant="contained" color="primary" size="large">
                        Subscribe to Shares Now
                    </Button>
                </Box>
                {showRisksModal && (
                    <RiskAcceptanceModal
                        onClose={() => store.RiskAcceptanceModal = false}
                        onAccept={handleAcceptRisks}
                    />
                )}
            </Box>
        </Box>
    );
};

export default observer(ShareSubscription);
