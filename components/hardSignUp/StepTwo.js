import * as React from 'react';
import { Box, TextField, Typography, FormControl, FormLabel, Button } from '@mui/material';
import CountrySelect from './../CountrySelect'; // Импортируем компонент для выбора страны
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StepTwo = ({ formik, handleNext, handleBack }) => {
    const handleDateChange = date => {
        formik.setFieldValue('dateOfBirth', date);
    };

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <FormControl fullWidth margin="normal">
                <FormLabel>Date of Birth</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={formik.values.dateOfBirth}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <Typography variant="caption" color="error">{formik.errors.dateOfBirth}</Typography>
                )}
            </FormControl>
            <FormControl fullWidth margin="normal" error={formik.touched.nationality && Boolean(formik.errors.nationality)}>
                <FormLabel>Nationality</FormLabel>
                <CountrySelect
                    value={formik.values.nationality}
                    onChange={value => formik.setFieldValue('nationality', value)}
                />
                {formik.touched.nationality && formik.errors.nationality && (
                    <Typography variant="caption" color="error">{formik.errors.nationality}</Typography>
                )}
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
                error={formik.touched.fullAddress && Boolean(formik.errors.fullAddress)}
                helperText={formik.touched.fullAddress && formik.errors.fullAddress}
            />
            <FormControl fullWidth margin="normal" error={formik.touched.country && Boolean(formik.errors.country)}>
                <FormLabel>Country</FormLabel>
                <CountrySelect
                    value={formik.values.country}
                    onChange={value => formik.setFieldValue('country', value)}
                />
                {formik.touched.country && formik.errors.country && (
                    <Typography variant="caption" color="error">{formik.errors.country}</Typography>
                )}
            </FormControl>
            <TextField
                label="City/Town"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                required
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
            />
            <TextField
                label="Postal/ZIP Code"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                required
                error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                helperText={formik.touched.postalCode && formik.errors.postalCode}
            />
        
        </Box>
    );
};

export default StepTwo;
