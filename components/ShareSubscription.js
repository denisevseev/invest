import React, {useState} from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, useTheme, useMediaQuery } from '@mui/material';
import store from "../stores/userStore";
import RiskAcceptanceModal from "./RiskAcceptance/RiskAcceptanceModal";
import InvestmentCalculator from './InvestmentCalculator/InvestmentCalculator'
import {observer} from "mobx-react-lite";
import UniversalModal from "./UniversalModal";

const ShareSubscription = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [showRisksModal, setShowRisksModal] = useState(false);
    const user = store.user;
    const handleAcceptRisks = () => {
        store.acceptedRisks = true; // Speichern der Risikoeinwilligung
        setShowRisksModal(false); // Schließen des Modalfensters
        store.showCalc = true;
    };
    const handleShow =()=>{
        setShowRisksModal(true)
    }

    return (
        <Box maxWidth={'lg'} sx={{ mt: 12, p: 2, ml: !isMobile && 25 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Zeichnungsanfrage
            </Typography>
            {store.showCalc && (<InvestmentCalculator/>)}
            {!isMobile ? (
                <Box
                    sx={{
                        position: 'relative',
                        height: '400px', // Höhe des Containers
                        overflow: 'hidden', // Teile des Bildes, die über den Container hinausgehen, ausblenden
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/images/shareS.jpg"
                        alt="Aktienzeichnung"
                        sx={{
                            position: 'absolute',
                            top: '-40%', // Bild um 20% nach oben verschieben
                            width: '100%',
                            height: 'auto', // Verhältnis des Bildes beibehalten
                        }}
                    />
                </Box>
            ): <CardMedia
                component="img"
                image="/images/shareS.jpg"
                alt="Aktienzeichnung"
                height="400"
            />}


            <Box sx={{ textAlign: 'left', maxWidth: '100%', p: isMobile ? 1 : 3 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Die Zeichnung von Aktien ermöglicht es Investoren, Teilbesitzer eines Unternehmens zu werden. Dies gewährt ihnen einen Anteil am Gewinn des Unternehmens und die Möglichkeit, Unternehmensentscheidungen zu beeinflussen. Durch die Zeichnung neuer Aktien können Investoren das Wachstum des Unternehmens unterstützen, während sie möglicherweise Dividenden erhalten und von der Wertsteigerung des Aktienkurses profitieren.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Die Aktienzeichnung ist eine wichtige Strategie für diejenigen, die ihr Investitionsportfolio diversifizieren möchten. Sie bietet eine Mischung aus Einkommen durch Dividenden und Kapitalgewinnen aus Kurssteigerungen. Es ist wichtig, die Leistung des Unternehmens, Branchentrends und Ihre finanziellen Ziele sorgfältig zu bewerten, bevor Sie eine Entscheidung zur Zeichnung treffen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '18px' : '21px' }}>
                    Ob Sie nun ein erfahrener Investor oder neu am Markt sind, die Zeichnung von Aktien kann eine wertvolle Ergänzung Ihrer Anlagestrategie sein und Ihnen helfen, über einen langen Zeitraum Vermögen aufzubauen.
                </Typography>
                <Box textAlign="center" mt={4}>
                    <Button onClick={handleShow} variant="contained" color="primary" size="large">
                        Jetzt Aktien zeichnen
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
