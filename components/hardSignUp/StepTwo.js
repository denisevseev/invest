import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, FormControl, FormLabel } from '@mui/material';
import CountrySelect from './../CountrySelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import store from './../../stores/userStore';
import dayjs from 'dayjs';

const StepTwo = ({ formik }) => {
    const [formData, setFormData] = useState(formik.values);

    useEffect(() => {
        store.handleArr(formData);
    }, [formData]);

    const handleDateChange = (date) => {
        const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : null;
        formik.setFieldValue('dateOfBirth', formattedDate);
        setFormData((prevData) => ({ ...prevData, dateOfBirth: formattedDate }));
    };

    const handleCountryChange = (value) => {
        formik.setFieldValue('nationality', value);
        setFormData((prevData) => ({ ...prevData, nationality: value }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        formik.handleChange(event);
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
                        value={formik.values.dateOfBirth ? dayjs(formik.values.dateOfBirth) : null}
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
                    onChange={handleCountryChange}
                />
                {formik.touched.nationality && formik.errors.nationality && (
                    <Typography variant="caption" color="error">{formik.errors.nationality}</Typography>
                )}
            </FormControl>
            <FormControl fullWidth margin="normal" error={formik.touched.fullAddress && Boolean(formik.errors.fullAddress)}>
                <FormLabel>Residence Address</FormLabel>
                <TextField
                    name="fullAddress"
                    value={formik.values.fullAddress}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={formik.touched.fullAddress && Boolean(formik.errors.fullAddress)}
                    helperText={formik.touched.fullAddress && formik.errors.fullAddress}
                />
            </FormControl>
            <FormControl fullWidth margin="normal" error={formik.touched.country && Boolean(formik.errors.country)}>
                <FormLabel>Country</FormLabel>
                <CountrySelect
                    value={formik.values.country}
                    onChange={(value) => {
                        formik.setFieldValue('country', value);
                        setFormData((prevData) => ({ ...prevData, country: value }));
                    }}
                />
                {formik.touched.country && formik.errors.country && (
                    <Typography variant="caption" color="error">{formik.errors.country}</Typography>
                )}
            </FormControl>
            <TextField
                label="City/Town"
                name="city"
                value={formik.values.city}
                onChange={handleChange}
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
                onChange={handleChange}
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
