// pages/test-signature.js
import React, { useState } from 'react';
import SignaturePad from '../components/SignaturePad';
import { Box, Typography } from '@mui/material';

const TestSignature = () => {
  const [signature, setSignature] = useState(null);

  const handleSave = (dataURL) => {
    setSignature(dataURL);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Test Signature Pad
      </Typography>
      <SignaturePad onSave={handleSave} documentTitle="Test Document" />
      {signature && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Saved Signature:
          </Typography>
          <img src={signature} alt="Saved signature" />
        </Box>
      )}
    </Box>
  );
};

export default TestSignature;
