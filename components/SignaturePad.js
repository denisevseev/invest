import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import {Box, Button, Container, Paper, Typography, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SignaturePad = ({ onSave, documentTitle }) => {
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
            <Paper elevation={3} sx={{ p: 2, mb: 2, width: '80vh', height: isMobile? '150vh': '',  mx: 'auto' }}>
                <SignatureCanvas
                    penColor='black'
                    canvasProps={{ width: 900, height: 900, className: 'sigCanvas' }}
                    ref={sigCanvas}
                />

            </Paper>
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
