import React, { useEffect } from 'react';

const LiveCryptoRates = () => {
    return (
        <div style={{position: 'relative', width: '85%', height: '1000px', marginLeft: '13%', marginTop: '5%'}}>
            <iframe
                src="https://de.widgets.investing.com/crypto-currency-rates?theme=darkTheme&pairs=945629,997650,1001803,1010773,1010776,1058450,1070733,1216741,1141246,1141240,1141244,1062274,1072139,1208965,1194523,1169558,1176589,1162410,1163317,1197629,1060393,1070478,1198310,1070848,1209141,1212101,1058464,1072201,1060570,1195933,1156077,1208297,1199656,1175027"
                width="100%" height="100%" frameBorder="0" allowTransparency="true" marginWidth="0"
                marginHeight="0"></iframe>
        </div>
    );
};

export default LiveCryptoRates;
