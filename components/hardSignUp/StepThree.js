import React from 'react';
import { Box, FormControl, Select, Button, MenuItem, FormHelperText, Typography, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';

const StepThree = ({ formik }) => {
    const options = {
        employmentStatus: ["Employed", "Self-Employed", "Unemployed", "Retired"],
        sourceOfFunds: ["Salary", "Business", "Savings", "Investments", "Other"],
        netWorth: ["Less than $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
        annualIncome: ["Less than $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
        anticipatedAnnualDeposit: ["Less than $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
        intendedPurpose: ["Investment", "Savings", "Retirement", "Other"],
        creditFundAccount: ["Bank Transfer", "Credit Card", "Debit Card", "Other"],
        politicallyExposedPerson: ["Yes", "No"],
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
                        onChange={formik.handleChange}
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

        
        </Box>
    );
};

export default observer(StepThree);
