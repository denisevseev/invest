import React, { useState } from 'react';
import { Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Checkbox, FormGroup, styled, Autocomplete } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { getNames } from 'country-list';
import store from './../../stores/userStore';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: 'green',
    '&.Mui-checked': {
        color: 'green',
    },
    '& .MuiSvgIcon-root': {
        width: theme.spacing(2),
        height: theme.spacing(2),
    },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    '.MuiTypography-root': {
        fontSize: '0.75rem',
        color: theme.palette.grey[500],
    },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: '100%',
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: '100%',
}));

const countries = getNames().map(name => ({
    label: name
}));

const CountrySelect = ({ value, onChange }) => {
    return (
        <Autocomplete
            options={countries}
            getOptionLabel={(option) => option.label}
            value={countries.find(country => country.label === value) || null}
            onChange={(event, newValue) => onChange(newValue ? newValue.label : '')}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Country of Residence"
                    variant="outlined"
                    required
                />
            )}
            ListboxProps={{ style: { maxHeight: '200px', overflow: 'auto' } }}
        />
    );
};

const StepOne = ({ formik }) => {
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        specialChar: false,
    });

    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        formik.handleChange(event);
        store.handleArr(formData);
    };

    const handleCountryChange = (country) => {
        setFormData(prevData => ({ ...prevData, country }));
        formik.setFieldValue('country', country);
        store.handleArr(formData);
    };

    const handlePhoneNumberChange = (phone) => {
        setFormData(prevData => ({ ...prevData, phoneNumber: phone }));
        formik.setFieldValue('phoneNumber', phone);
        store.handleArr(formData);
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPasswordCriteria({
            length: value.length >= 9,
            lowercase: /[a-z]/.test(value),
            uppercase: /[A-Z]/.test(value),
            number: /\d/.test(value),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        });
        formik.handleChange(e);
        setFormData(prevData => ({ ...prevData, password: value }));
        formik.setFieldValue('password', value);
        store.handleArr(formData);
    };

    return (
        <Box>
            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Client Type</FormLabel>
                <RadioGroup
                    row
                    name="clientType"
                    value={formik.values.clientType}
                    onChange={formik.handleChange}
                >
                    <FormControlLabel value="individual" control={<Radio />} label="Individual Client" />
                    <FormControlLabel value="corporate" control={<Radio />} label="Corporate Client" />
                </RadioGroup>
            </FormControl>
            {formik.values.clientType === 'individual' ? (
                <>
                    <CustomTextField
                        label="First Name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        required
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <CustomTextField
                        label="Last Name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        required
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </>
            ) : (
                <CustomTextField
                    label="Company Name"
                    name="companyName"
                    value={formik.values.companyName}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    required
                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                    helperText={formik.touched.companyName && formik.errors.companyName}
                />
            )}
            <CustomFormControl>
                <CountrySelect
                    value={formik.values.country}
                    onChange={handleCountryChange}
                />
                {formik.touched.country && formik.errors.country && (
                    <Typography color="error">{formik.errors.country}</Typography>
                )}
            </CustomFormControl>
            <CustomFormControl>
                <PhoneInput
                    country={formik.values.country ? formik.values.country.toLowerCase() : ''}
                    value={formik.values.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    enableSearch
                    inputStyle={{ width: '100%', height: '56px' }}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <Typography color="error">{formik.errors.phoneNumber}</Typography>
                )}
            </CustomFormControl>
            <CustomTextField
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                disabled
                required
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <CustomTextField
                label="Password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={handlePasswordChange}
                onBlur={formik.handleBlur}
                required
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
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
                <CustomFormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.length} />}
                    label="Minimum 9 characters"
                    sx={{ flex: '0 0 calc(60% - 10px)', mr: '10px' }}
                />
                <CustomFormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.lowercase} />}
                    label="One lowercase character"
                    sx={{ flex: '0 0 calc(40% - 10px)', mr: '10px' }}
                />
                <CustomFormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.uppercase} />}
                    label="One uppercase character"
                    sx={{ flex: '0 0 calc(60% - 10px)', mr: '10px' }}
                />
                <CustomFormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.number} />}
                    label="One number"
                    sx={{ flex: '0 0 calc(40% - 10px)', mr: '10px' }}
                />
                <CustomFormControlLabel
                    control={<CustomCheckbox checked={passwordCriteria.specialChar} />}
                    label="One special character"
                    sx={{ flex: '0 0 calc(60% - 10px)' }}
                />
            </FormGroup>
        </Box>
    );
};

export default StepOne;
