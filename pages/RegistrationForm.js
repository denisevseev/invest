import React, { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, useMediaQuery, useTheme, Drawer, IconButton } from '@mui/material';
import StepOne from '../components/hardSignUp/StepOne';
import StepTwo from '../components/hardSignUp/StepTwo';
import StepThree from '../components/hardSignUp/StepThree';
import { useFormik } from 'formik';
import AppBarComponent from "../components/AppBar";
import { useRouter } from "next/router";
import CustomSideBar from "./CustomSideBar";
import { useSession } from 'next-auth/react'; // Импортируем useSession
import * as Yup from 'yup';
import MenuIcon from '@mui/icons-material/Menu';
import UserInfoComponent from "../components/UserInfoComponent";
import store from './../stores/userStore'

const steps = ['Individual Client', 'Corporate Client', 'Finish'];

const RegistrationForm = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { data: session, status } = useSession(); // Получаем данные сессии


    const formik = useFormik({
        initialValues: {
            clientType: 'individual',
            firstName: '',
            lastName: '',
            country: '',
            phoneNumber: '',
            email: '',
            password: '',
            nationality: 'fdf',
            dateOfBirth: null,
            fullAddress: '',
            city: '',
            postalCode: '',
        },
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                const data = await response.json();

                if (response.ok) {
                    console.log('User registered successfully:', data);
                    alert('User registered successfully');
                    router.push('/'); // Перенаправление после успешной регистрации
                } else {
                    console.error('Error registering user:', data);
                    alert('Error registering user');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error registering user');
            }
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            phoneNumber: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required'),
        }),
    });

    const handleNext = () => {
        if (validateForm()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const validateForm = () => {
        if (formik.values.clientType === 'individual') {
            if (!formik.values.firstName || !formik.values.lastName || !formik.values.email || !formik.values.password) {
                alert('Please fill in all required fields.');
                return false;
            }
        } else {
            if (!formik.values.companyName || !formik.values.email || !formik.values.password) {
                alert('Please fill in all required fields.');
                return false;
            }
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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        if (!session || status !== 'authenticated') {
            router.push('/login');
        }
    }, [session, status]);

    return (
        <div>
            <UserInfoComponent isMobile={isMobile}/>
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                <CustomSideBar />
            </Drawer>

            {store.RegForm ? <Box
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
                <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Register in minutes
                    </Typography>
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
                        {formik.values.clientType !== 'corporate' && (
                            <>
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
                                    <Button onClick={formik.handleSubmit}>
                                        Finish
                                    </Button>
                                ) : (
                                    <Button onClick={handleNext}>
                                        Next
                                    </Button>
                                )}
                            </>
                        )}
                        {formik.values.clientType === 'corporate' && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={formik.handleSubmit}
                                fullWidth
                            >
                                Continue
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>: "" }

        </div>
    );
};

export default RegistrationForm;
