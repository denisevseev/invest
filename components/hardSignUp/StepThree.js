import React, { useState } from 'react';
import { Box, Button, FormControl, Select, MenuItem, FormHelperText, Typography, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from '../../stores/userStore';

const StepThree = ({ formik }) => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value);
        store.handleArr({ name, value });
    };

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
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        renderValue={(selected) => {
                            if (!selected || selected.length === 0) {
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
                Finish
            </Button>
        </Box>
    );
};

export default observer(StepThree);
