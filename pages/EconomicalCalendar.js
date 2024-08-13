import React, {useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '150%',
    backgroundImage: `url('/images/economicc.jpg')`,
}));

const IframeContainer = styled(Box)(({ theme }) => ({
    width: '50%',
    maxWidth: '1200px'
}));

const AttributionText = styled(Box)(({ theme }) => ({
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '11px',
    color: '#333333',
    marginTop: theme.spacing(2),
    textAlign: 'center'
}));

const EconomicCalendar = () => {
    setTimeout(()=>{    document.querySelector('body').style.fontSize = '60px'
    },5000)
    return (
        <StyledBox>
            <Typography variant="h6" gutterBottom>
                Wirtschaftskalender
            </Typography>
            <IframeContainer >
                <iframe
                    src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,37,17,72,22,39,14,48,10,35,6,43,21,38,12,36,26,110,5,4&calType=week&timeZone=16&lang=8"
                    width="65%"
                    height="900"
                    frameBorder="0"
                    allowTransparency="true"
                    marginWidth="0"
                    marginHeight="0"
                    style={{ border: '0' }}
                >dfg</iframe>
            </IframeContainer>
        </StyledBox>
    );
};

export default EconomicCalendar;


