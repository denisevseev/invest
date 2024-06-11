import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import StepOne from '../components/hardSignUp/StepOne';
import StepTwo from '../components/hardSignUp/StepTwo';
import StepThree from '../components/hardSignUp/StepThree';

const steps = ['Individual Client', 'Corporate Client', 'Finish'];

const RegistrationForm = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        clientType: 'individual',
        firstName: '',
        lastName: '',
        country: 'Russian Federation',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <StepOne formData={formData} handleChange={handleChange} />;
            case 1:
                return <StepTwo formData={formData} handleChange={handleChange} />;
            case 2:
                return <StepThree formData={formData} handleSubmit={handleSubmit} />;
            default:
                return 'Unknown step';
        }
    };

    return (

        <Box
            sx={{
                maxWidth: 500,
                mx: 'auto',
                mt: 4,
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                backgroundColor: '#fff',
            }}
        >
            <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Register in minutes
                </Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ mt: 2 }}>
                    {getStepContent(activeStep)}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep === steps.length - 1 ? (
                        <Button onClick={handleSubmit}>
                            Finish
                        </Button>
                    ) : (
                        <Button onClick={handleNext}>
                            Next
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>


    );
};

export default RegistrationForm;
