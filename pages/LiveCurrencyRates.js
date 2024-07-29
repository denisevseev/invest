import React from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
`;

const PoweredBy = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 10px;
`;

const LiveCurrencyRates = () => {
    return (
        <WidgetContainer>
            <iframe
                src="https://de.widgets.investing.com/live-currency-cross-rates?theme=darkTheme"
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency="true"
                marginWidth="0"
                marginHeight="0"
            ></iframe>
            <PoweredBy>
                Bereitgestellt von{' '}
                <a
                    href="https://de.investing.com?utm_source=WMT&utm_medium=referral&utm_campaign=LIVE_CURRENCY_X_RATES&utm_content=Footer%20Link"
                    target="_blank"
                    rel="nofollow"
                >
                    Investing.com
                </a>
            </PoweredBy>
        </WidgetContainer>
    );
};

export default LiveCurrencyRates;
