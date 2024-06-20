import React, { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import StepOne from '../components/hardSignUp/StepOne';
import StepTwo from '../components/hardSignUp/StepTwo';
import StepThree from '../components/hardSignUp/StepThree';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppBarComponent from "../components/AppBar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ModalComponent from '../components/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import store from '../stores/userStore';

const steps = ['', '', ''];

const RegistrationFormContent = ({ session }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const router = useRouter();

    const phoneRegExp = /^(\+?\d{1,4}|\d{1,4})?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    const individualValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        dateOfBirth: Yup.date().required('Required').nullable(),
        nationality: Yup.string().required('Required'),
        fullAddress: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postalCode: Yup.string().required('Required'),
        employmentStatus: Yup.string().required('Required'),
        sourceOfFunds: Yup.string().required('Required'),
        netWorth: Yup.string().required('Required'),
        annualIncome: Yup.string().required('Required'),
        anticipatedAnnualDeposit: Yup.string().required('Required'),
        intendedPurpose: Yup.string().required('Required'),
        creditFundAccount: Yup.string().required('Required'),
    });

    const corporateValidationSchema = Yup.object().shape({
        companyName: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            clientType: 'individual',
            firstName: '',
            lastName: '',
            companyName: '',
            country: '',
            phoneNumber: '',
            email: '',
            password: '',
            nationality: '',
            dateOfBirth: null,
            fullAddress: '',
            city: '',
            postalCode: '',
            employmentStatus: '',
            sourceOfFunds: '',
            netWorth: '',
            annualIncome: '',
            anticipatedAnnualDeposit: '',
            intendedPurpose: '',
            creditFundAccount: '',
        },
        validationSchema: Yup.lazy(values =>
            values.clientType === 'individual' ? individualValidationSchema : corporateValidationSchema
        ),
        onSubmit: async (values) => {
            const filteredValues = values.clientType === 'corporate'
                ? {
                    clientType: values.clientType,
                    companyName: values.companyName,
                    country: values.country,
                    phoneNumber: values.phoneNumber,
                    email: values.email,
                    password: values.password,
                }
                : values;

            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(filteredValues),
                });

                const data = await response.json();

                if (response.ok) {
                    setModalMessage('User registered successfully');
                    setModalOpen(true);
                    setTimeout(() => {
                        setModalOpen(false);
                        router.push('/login');
                    }, 2000);
                } else {
                    setModalMessage(data.message);
                    setModalOpen(true);
                }
            } catch (error) {
                setModalMessage('Error registering user');
                setModalOpen(true);
            }
        },
    });

    const handleNext = () => {
        if (validateForm()) {
            if (activeStep === steps.length - 1) {
                formik.handleSubmit();
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        }
    };

    const validateForm = () => {
        const { values } = formik;

        const requiredFields = {
            0: values.clientType === 'individual' ? ['firstName', 'lastName', 'country', 'phoneNumber', 'email', 'password']
                : ['companyName', 'country', 'phoneNumber', 'email', 'password'],
            1: ['dateOfBirth', 'nationality', 'fullAddress', 'country', 'city', 'postalCode'],
            2: ['employmentStatus', 'sourceOfFunds', 'netWorth', 'annualIncome', 'anticipatedAnnualDeposit', 'intendedPurpose', 'creditFundAccount']
        };

        const allValuesPresent = requiredFields[activeStep].every(field => values[field] !== '' && values[field] !== null && values[field] !== undefined);

        if (!allValuesPresent) {
            <ModalComponent/>
            alert('Please fill in all required fields.');
            return false;
        }

        return true;
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <StepOne formik={formik} />;
            case 1:
                return <StepTwo formik={formik} />;
            case 2:
                return <StepThree formik={formik} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <div>
            <AppBarComponent />
            <ModalComponent open={modalOpen} message={modalMessage} handleClose={() => setModalOpen(false)} />
            <Box
                sx={{
                    maxWidth: 500,
                    mx: 'auto',
                    mt: 17,
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '24px',
                    backgroundColor: '#fff',
                }}
            >
                <Typography sx={{ textAlign: 'center', display: 'inline-block' }} variant="h5" gutterBottom>
                    Register in minutes <CheckCircleIcon style={{ color: 'blue', fontSize: 25, verticalAlign: 'middle' }} />
                </Typography>

                <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
                    {formik.values.clientType !== 'corporate' && (
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    )}
                    <Box sx={{ mt: 2 }}>
                        {getStepContent(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button
                            variant="text"
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

const RegistrationForm = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status]);

    if (status === 'unauthenticated') {
        return null; // Return null while redirecting to prevent rendering
    }

    return <RegistrationFormContent session={session} />;
};

export default RegistrationForm;
