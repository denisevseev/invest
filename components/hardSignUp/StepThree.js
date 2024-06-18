import React from 'react';
import { Box, Button, FormControl, Select, MenuItem, FormHelperText, Typography, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepThree = () => {
    const options = {
        employmentStatus: ["Employed", "Self-Employed", "Unemployed", "Retired"],
        sourceOfFunds: ["Salary", "Business", "Savings", "Investments", "Other"],
        netWorth: ["Less than $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
        annualIncome: ["Less than $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
        anticipatedAnnualDeposit: ["Less than $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
        intendedPurpose: ["Investment", "Savings", "Retirement", "Other"],
        creditFundAccount: ["Bank Transfer", "Credit Card", "Debit Card", "Other"],
        politicallyExposedPerson: ["Yes", "No"]
    };

    const validationSchema = Yup.object().shape({
        employmentStatus: Yup.string().required('Employment Status is required'),
        sourceOfFunds: Yup.string().required('Source of Funds is required'),
        netWorth: Yup.string().required('Net Worth is required'),
        annualIncome: Yup.string().required('Annual Income is required'),
        anticipatedAnnualDeposit: Yup.string().required('Anticipated Annual Deposit is required'),
        foreseeableExpenses: Yup.number().required('Foreseeable Expenses is required'),
        intendedPurpose: Yup.string().required('Intended Purpose is required'),
        creditFundAccount: Yup.string().required('Credit/Fund Account is required'),
        politicallyExposedPerson: Yup.string().required('Politically Exposed Person is required')
    });

    const formik = useFormik({
        initialValues: {
            employmentStatus: '',
            sourceOfFunds: '',
            netWorth: '',
            annualIncome: '',
            anticipatedAnnualDeposit: '',
            foreseeableExpenses: '',
            intendedPurpose: '',
            creditFundAccount: '',
            politicallyExposedPerson: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography variant="h6" gutterBottom>Employment & Financial Info</Typography>
            
            {Object.keys(options).map((key, index) => (
                <FormControl
                    fullWidth
                    margin="normal"
                    key={index}
                    error={formik.touched[key] && Boolean(formik.errors[key])}
                    sx={{ mb: 2 }}
                >
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="body1">
                            {key.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase())} *
                        </Typography>
                    </Box>
                    <Select
                        displayEmpty
                        name={key}
                        value={formik.values[key]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Please select</em>;
                            }
                            return selected;
                        }}
                    >
                        <MenuItem disabled value="">
                            <em>Please select</em>
                        </MenuItem>
                        {options[key].map((option, idx) => (
                            <MenuItem key={idx} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                    {formik.touched[key] && formik.errors[key] && (
                        <FormHelperText>{formik.errors[key]}</FormHelperText>
                    )}
                </FormControl>
            ))}

            <FormControl
                fullWidth
                margin="normal"
                error={formik.touched.foreseeableExpenses && Boolean(formik.errors.foreseeableExpenses)}
                sx={{ mb: 2 }}
            >
                <Box sx={{ mb: 1 }}>
                    <Typography variant="body1">
                        What are your foreseeable expenses over the next 12 months (EUR)? *
                    </Typography>
                </Box>
                <TextField
                    name="foreseeableExpenses"
                    type="number"
                    value={formik.values.foreseeableExpenses}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.foreseeableExpenses && formik.errors.foreseeableExpenses && (
                    <FormHelperText>{formik.errors.foreseeableExpenses}</FormHelperText>
                )}
            </FormControl>

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Continue
            </Button>
        </Box>
    );
};

export default StepThree;
