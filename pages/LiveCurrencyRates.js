import React from 'react';

const LiveCurrencyRates = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: '85%',
                height: '1000px',
                marginLeft: '13%',
                marginTop: '5%',
                overflow: 'hidden', // Запрещает прокрутку
            }}
        >
            <iframe
                src="https://de.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,2,4,7,5,8,6,9,10,49,11,13,16,47,51,58,50,53,15,12,52,48,55,42,155,43,54,9275,9276,9309,9310,9277,9278,9279,9280,9282,9283,9325,9284,9285,9287,9326,9312,1467,9292"
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency="true"
                marginWidth="0"
                marginHeight="0"
                style={{ overflow: 'hidden' }} // Отключает прокрутку внутри iframe
            />
        </div>
    );
};

export default LiveCurrencyRates;
