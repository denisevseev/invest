import React, { useState, useRef } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography, Paper, Container, Checkbox, FormControlLabel } from '@mui/material';
import { useRouter } from 'next/router';
import SignaturePad from './../components/SignaturePad';
import Documents from './../components/Documents';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DocumentStep = ({ title, content, onAgree, scrolledToEnd, isLastStep, onNext, checked, setChecked }) => {
  const contentRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const atBottom = scrollTop + clientHeight >= scrollHeight;
      scrolledToEnd(atBottom);
      if (atBottom && !checked) {
        setChecked(true);
      }
    }
  };

  const handleNextClick = () => {
    setChecked(false);
    onNext();
  };

  return (
      <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100vh', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Box
            ref={contentRef}
            onScroll={handleScroll}
            sx={{ maxHeight: '100vh', overflowY: 'auto', mb: 2 }}
        >
          <Typography variant="body1">{content}</Typography>
        </Box>
        {!isLastStep && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormControlLabel
                  control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
                  label="I have read and agree to the terms"
              />
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextClick}
                  disabled={!checked}
              >
                Next
              </Button>
            </Box>
        )}
      </Paper>
  );
};

const SignatureStep = ({ onSaveSignature, onFinish, canFinish }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100vh', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom>Signature</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please sign below to agree to the documents.
        </Typography>
        <SignaturePad onSave={onSaveSignature} documentTitle="Signature" />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
              variant="contained"
              color="primary"
              onClick={onFinish}
              disabled={!canFinish}
          >
            Finish
          </Button>
        </Box>
      </Paper>
  );
};

const InvestorAgreement = () => {
  const documents = Documents;
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false, false]);
  const [canProceed, setCanProceed] = useState(false);
  const [signatures, setSignatures] = useState({});
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAgree = () => {
    console.log("Agreed to document:", documents[activeStep].title);
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[activeStep] = true;
    setCompletedSteps(newCompletedSteps);
    setCanProceed(true);
  };

  const handleNext = () => {
    if (activeStep < documents.length - 1) {
      console.log("Proceeding to next document");
      setActiveStep(prevStep => prevStep + 1);
      setChecked(false); // Сброс состояния checked на false
    } else {
      console.log("Proceeding to signature step");
      setActiveStep(prevStep => prevStep + 1);
      setCanProceed(true);
    }
  };

  const handleSaveSignature = (signature) => {
    console.log("Signature received:", signature);
    setSignatures(prev => ({
      ...prev,
      signature,
    }));
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[documents.length] = true;
    setCompletedSteps(newCompletedSteps);
    setCanProceed(true);
  };

  const handleFinish = async () => {
    console.log("Finishing agreement process");
    // Save signatures and documents to the server
    try {
      const response = await fetch('/api/saveDocuments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ signatures, documents }),
      });

      if (!response.ok) {
        throw new Error('Failed to save documents');
      }

      alert('Thank you for agreeing to all documents and providing necessary information.');
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving documents.');
    }
  };

  return (
      <Container sx={{ mt: isMobile ? 4 : 12, width: '100vh' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {documents.map((doc, index) => (
              <Step key={doc.title} completed={completedSteps[index]}>
                <StepLabel>{doc.title}</StepLabel>
              </Step>
          ))}
          <Step key="Signature" completed={completedSteps[documents.length]}>
            <StepLabel>Signature</StepLabel>
          </Step>
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {activeStep < documents.length ? (
              <DocumentStep
                  title={documents[activeStep].title}
                  content={documents[activeStep].content}
                  onAgree={handleAgree}
                  scrolledToEnd={setCanProceed}
                  isLastStep={false}
                  onNext={handleNext}
                  checked={checked} // Передача состояния checked
                  setChecked={setChecked} // Передача функции setChecked
              />
          ) : (
              <SignatureStep
                  onSaveSignature={handleSaveSignature}
                  onFinish={handleFinish}
                  canFinish={canProceed}
              />
          )}
        </Box>
      </Container>
  );
};

export default InvestorAgreement;
