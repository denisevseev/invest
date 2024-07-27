import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, FormControl, FormLabel, styled } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { getNames } from 'country-list';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import store from './../../stores/userStore';
import dayjs from 'dayjs';
import Popper from '@mui/material/Popper';

const CustomTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: '100%',
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: '100%',
}));

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiAutocomplete-inputRoot': {
        height: '56px',
        padding: '0 14px',
        boxSizing: 'border-box',
        '& .MuiAutocomplete-input': {
            padding: '8.5px 4px',
        },
    },
}));

const CustomPopper = (props) => {
    return (
        <Popper
            {...props}
            modifiers={[
                {
                    name: 'flip',
                    enabled: false,
                },
                {
                    name: 'preventOverflow',
                    options: {
                        altAxis: true,
                        altBoundary: true,
                    },
                },
            ]}
            placement="bottom-start"
        />
    );
};

const countries = getNames().map(name => ({
    label: name
}));

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
            <CustomFormControl>
                <FormLabel>Date of Birth</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={formik.values.dateOfBirth ? dayjs(formik.values.dateOfBirth) : null}
                        onChange={handleDateChange}
                        renderInput={(params) => <CustomTextField {...params} />}
                    />
                </LocalizationProvider>
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <Typography variant="caption" color="error">{formik.errors.dateOfBirth}</Typography>
                )}
            </CustomFormControl>
            <CustomFormControl error={formik.touched.nationality && Boolean(formik.errors.nationality)}>
                <FormLabel>Nationality</FormLabel>
                <CustomAutocomplete
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    value={countries.find(country => country.label === formik.values.nationality) || null}
                    onChange={(event, newValue) => handleCountryChange(newValue ? newValue.label : '')}
                    renderInput={(params) => (
                        <CustomTextField
                            {...params}
                            variant="outlined"
                            required
                        />
                    )}
                    PopperComponent={CustomPopper}
                />
                {formik.touched.nationality && formik.errors.nationality && (
                    <Typography variant="caption" color="error">{formik.errors.nationality}</Typography>
                )}
            </CustomFormControl>
            <CustomFormControl error={formik.touched.fullAddress && Boolean(formik.errors.fullAddress)}>
                <FormLabel>Residence Address</FormLabel>
                <CustomTextField
                    name="fullAddress"
                    value={formik.values.fullAddress}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={formik.touched.fullAddress && Boolean(formik.errors.fullAddress)}
                    helperText={formik.touched.fullAddress && formik.errors.fullAddress}
                />
            </CustomFormControl>
            <CustomFormControl error={formik.touched.country && Boolean(formik.errors.country)}>
                <FormLabel>Country</FormLabel>
                <CustomAutocomplete
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    value={countries.find(country => country.label === formik.values.country) || null}
                    onChange={(event, newValue) => {
                        const value = newValue ? newValue.label : '';
                        formik.setFieldValue('country', value);
                        setFormData((prevData) => ({ ...prevData, country: value }));
                    }}
                    renderInput={(params) => (
                        <CustomTextField
                            {...params}
                            variant="outlined"
                            required
                        />
                    )}
                    PopperComponent={CustomPopper}
                />
                {formik.touched.country && formik.errors.country && (
                    <Typography variant="caption" color="error">{formik.errors.country}</Typography>
                )}
            </CustomFormControl>

            <CustomTextField
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
            <CustomTextField
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
