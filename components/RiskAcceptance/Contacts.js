import { Box, Typography } from "@mui/material";
import React from "react";

export default function Contacts(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
            }}
        >
            <Box sx={{ textAlign: 'center', bgcolor: '#d3d3d3', p: 2, borderRadius: '4px', flex: 1, m: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    2102-58 Keefer Place
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    Vancouver, BC V6B 0B6
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    Canada
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', bgcolor: '#d3d3d3', p: 2, borderRadius: '4px', flex: 1, m: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    Phone: +1 778-9002-237
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    Fax: +1 205-7402-846
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    Email: support@ramford-inc.com
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    Internet: www.ramford-inc.com
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', bgcolor: '#d3d3d3', p: 2, borderRadius: '4px', flex: 1, m: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    TransferWise Europe SA
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    SWIFT/BIC: TRWIBEB1XXX
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    IBAN: BE79 9671 7187 1333
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', bgcolor: '#d3d3d3', p: 2, borderRadius: '4px', flex: 1, m: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    TD Canada Trust
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    SWIFT/BIC: TDOMCATTOR
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    BLZ/Wire: 53784-004
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    Konto-Nr: 5017003
                </Typography>
            </Box>
        </Box>
    )

}