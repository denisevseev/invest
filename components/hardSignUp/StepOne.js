import React, { useState } from 'react';
import { Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Checkbox, FormGroup, styled } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import CountrySelect from './../CountrySelect'; // Импортируем компонент для выбора стран

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: 'green', // Зеленый цвет для неотмеченного чекбокса
    '&.Mui-checked': {
        color: 'green', // Зеленый цвет для отмеченного чекбокса
    },
    '& .MuiSvgIcon-root': {
        width: theme.spacing(2), // Размер галочки
        height: theme.spacing(2), // Размер галочки
    },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    fontSize: '0.4rem', // Уменьшаем размер шрифта описания пунктов
    color: theme.palette.grey[500], // Серый цвет для описания пунктов
}));

const customStyles = {
    menu: (provided) => ({
        ...provided,
        zIndex: 9999,
        backgroundColor: 'white',
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: 'white',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'black',
    }),
};

const StepOne = ({ formData, handleChange }) => {
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        specialChar: false,
    });

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPasswordCriteria({
            length: value.length >= 9,
            lowercase: /[a-z]/.test(value),
            uppercase: /[A-Z]/.test(value),
            number: /\d/.test(value),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        });
        handleChange(e);
    };

    return (
        <Box>
            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Client Type</FormLabel>
                <RadioGroup row name="clientType" value={formData.clientType} onChange={handleChange}>
                    <FormControlLabel value="individual" control={<Radio />} label="Individual Client" />
                    <FormControlLabel value="corporate" control={<Radio />} label="Corporate Client" />
                </RadioGroup>
            </FormControl>
            {formData.clientType === 'individual' ? (
                <>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        sx={{ width: '100%', mb: 2 }}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        sx={{ width: '100%', mb: 2 }}
                    />
                </>
            ) : (
                <TextField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    sx={{ width: '100%', mb: 2 }}
                />
            )}
            <FormControl fullWidth margin="normal" sx={{ width: '100%', mb: 2 }}>
                <FormLabel>Country of Residence</FormLabel>
                <CountrySelect
                    value={formData.country}
                    onChange={country => handleChange({ target: { name: 'country', value: country } })}
                />
            </FormControl>
            <FormControl fullWidth margin="normal" sx={{ width: '100%', mb: 2 }}>
                <PhoneInput
                    country={formData.country.toLowerCase()}
                    value={formData.phoneNumber}
                    onChange={phone => handleChange({ target: { name: 'phoneNumber', value: phone } })}
                    enableSearch
                    inputStyle={{ width: '100%' }} // Устанавливаем ширину поля для ввода телефонного номера в 100%
                />
            </FormControl>
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                sx={{ width: '100%', mb: 2 }}
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
                required
                sx={{ width: '100%', mb: 2 }}
            />
            <FormGroup
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <FormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.length} />}
                    label="Minimum 9 characters"
                    sx={{ flex: '0 0 calc(60% - 10px)', mr: '10px' }}
                    component={CustomFormControlLabel}
                />
                <FormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.lowercase} />}
                    label="One lowercase character"
                    sx={{ flex: '0 0 calc(40% - 10px)', mr: '10px' }}
                    component={CustomFormControlLabel} // Используем наш кастомный компонент для описания
                />
                <FormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.uppercase} />}
                    label="One uppercase character"
                    sx={{ flex: '0 0 calc(60% - 10px)', mr: '10px' }}
                    component={CustomFormControlLabel} // Используем наш кастомный компонент для описания
                />
                <FormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.number} />}
                    label="One number"
                    sx={{ flex: '0 0 calc(40% - 10px)', mr: '10px' }}
                    component={CustomFormControlLabel} // Используем наш кастомный компонент для описания
                />
                <FormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.specialChar} />}
                    label="One special character"
                    sx={{ flex: '0 0 calc(60% - 10px)' }}
                    component={CustomFormControlLabel} // Используем наш кастомный компонент для описания
                />
            </FormGroup>
        </Box>
    );
};

export default StepOne;
