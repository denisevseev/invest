import React, { useState } from 'react';
import { Box, Typography, Button, CardMedia, useTheme, useMediaQuery } from '@mui/material';
import store from "../stores/userStore";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";
import InvestmentCalculator from './InvestmentCalculator/InvestmentCalculator';
import { observer } from "mobx-react-lite";
import en from '../public/lang/en.json';
import de from '../public/lang/de.json';

const ShareSubscription = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [showRisksModal, setShowRisksModal] = useState(false);
    const user = store.user;

    const lang = store.lang === 'de' ? de : en;
    const { shareSubscription } = lang;

    const handleAcceptRisks = () => {
        store.acceptedRisks = true; // Saving the risk acceptance
        setShowRisksModal(false); // Closing the modal
        store.showCalc = true;
    };

    const handleShow = () => {
        setShowRisksModal(true);
    };

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                {shareSubscription.title}
            </Typography>
            {store.showCalc && (<InvestmentCalculator />)}
            {!isMobile ? (
                <Box
                    sx={{
                        position: 'relative',
                        height: '400px',
                        overflow: 'hidden',
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/images/shareS.jpg"
                        alt={shareSubscription.imageAlt}
                        sx={{
                            position: 'absolute',
                            top: '-40%',
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Box>
            ) : (
                <CardMedia
                    component="img"
                    image="/images/shareS.jpg"
                    alt={shareSubscription.imageAlt}
                    height="400"
                />
            )}

            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                {shareSubscription.paragraphs.map((paragraph, index) => (
                    <Typography key={index} variant="body1" paragraph >
                        {paragraph}
                    </Typography>
                ))}
                <Box textAlign="center" mt={4}>
                    <Button onClick={handleShow} variant="contained" color="primary" size="large">
                        {shareSubscription.buttonText}
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
