import React from 'react';
import { Box, TextField, Typography, FormControl, FormLabel } from '@mui/material';
import CountrySelect from './../CountrySelect'; // Импортируем компонент для выбора страны
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StepTwo = ({ formik }) => {
    const handleDateChange = date => {
        formik.setFieldValue('dateOfBirth', date);
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <FormControl fullWidth margin="normal">
                <FormLabel>Date of Birth</FormLabel>
                <DatePicker
                    selected={formik.values.dateOfBirth}
                    onChange={handleDateChange}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="ДД.ММ.ГГГГ"
                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd"
                    wrapperClassName="MuiFormControl-root MuiTextField-root"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <FormLabel>Nationality</FormLabel>
                <CountrySelect
                    value={formik.values.nationality}
                    onChange={value => formik.setFieldValue('nationality', value)}
                />
            </FormControl>
            <Typography variant="h6" gutterBottom>
                Residence Address
            </Typography>
            <TextField
                label="Full Address"
                name="fullAddress"
                value={formik.values.fullAddress}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                required
            />
            <FormControl fullWidth margin="normal">
                <FormLabel>Country</FormLabel>
                <CountrySelect
                    value={formik.values.country}
                    onChange={value => formik.setFieldValue('country', value)}
                />
            </FormControl>
            <TextField
                label="City/Town"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Postal/ZIP Code"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                required
            />
        </Box>
    );
};

export default StepTwo;
