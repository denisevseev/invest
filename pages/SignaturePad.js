import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Box, Button, Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SignaturePad = ({ onSave }) => {
    const sigCanvas = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const clear = () => {
        console.log("Clearing the canvas");
        sigCanvas.current.clear();
    };

    const save = () => {
        if (sigCanvas.current.isEmpty()) {
            alert('Please provide a signature first.');
            return;
        }
        const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
        console.log("Signature saved:", dataURL);
        onSave(dataURL);
    };

    return (
        <>
                <SignatureCanvas
                    penColor='black'
                    canvasProps={{ width: isMobile ? window.innerWidth * 0.9 : 900, height: isMobile ? 400 : 900, className: 'sigCanvas' }}
                    ref={sigCanvas}
                />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button variant="contained" color="secondary" onClick={clear}>
                    Clear
                </Button>
                <Button variant="contained" color="primary" onClick={save}>
                    Save
                </Button>
            </Box>
        </>
    );
};

export default SignaturePad;