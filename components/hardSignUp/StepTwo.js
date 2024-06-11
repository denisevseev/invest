import React from 'react';
import { Box, TextField, Typography, FormControl, FormLabel } from '@mui/material';
import CountrySelect from './../CountrySelect'; // Импортируем компонент для выбора страны
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StepTwo = ({ formData, handleChange }) => {
    const handleDateChange = date => {
        handleChange({
            target: {
                name: 'dateOfBirth',
                value: date
            }
        });
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <FormControl fullWidth margin="normal">
                <FormLabel>Date of Birth</FormLabel>
                <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={handleDateChange}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="ДД.ММ.ГГГГ"
                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd"
                    wrapperClassName="MuiFormControl-root MuiTextField-root"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <FormLabel>Nationality</FormLabel>
                {/* Используем компонент CountrySelect для выбора национальности */}
                <CountrySelect
                    value={formData.nationality}
                    onChange={value => handleChange({ target: { name: 'nationality', value } })}
                />
            </FormControl>
            <Typography variant="h6" gutterBottom>
                Residence Address
            </Typography>
            <TextField
                label="Full Address"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <FormControl fullWidth margin="normal">
                <FormLabel>Country</FormLabel>
                {/* Используем компонент CountrySelect для выбора страны проживания */}
                <CountrySelect
                    value={formData.country}
                    onChange={value => handleChange({ target: { name: 'country', value } })}
                />
            </FormControl>
            <TextField
                label="City/Town"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Postal/ZIP Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
        </Box>
    );
};

export default StepTwo;
