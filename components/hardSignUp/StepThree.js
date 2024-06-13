import React from 'react';
import { Box, TextField, Button, MenuItem, FormControl, FormLabel, Select, InputLabel } from '@mui/material';

const StepThree = ({ formik }) => {

    const questions = [
        {
            label: "Security Question 1",
            name: "securityQuestion1",
            options: [
                "What is your mother's maiden name?",
                "What was your first pet's name?",
                "What was the name of your elementary school?"
            ]
        },
        {
            label: "Security Question 2",
            name: "securityQuestion2",
            options: [
                "What is your favorite book?",
                "What city were you born in?",
                "What is your favorite color?"
            ]
        },
        {
            label: "Security Question 3",
            name: "securityQuestion3",
            options: [
                "What is your favorite movie?",
                "What is your father's middle name?",
                "What was the make of your first car?"
            ]
        },
        {
            label: "Security Question 4",
            name: "securityQuestion4",
            options: [
                "What is your favorite food?",
                "What is the name of your best friend?",
                "What is your favorite hobby?"
            ]
        },
        {
            label: "Security Question 5",
            name: "securityQuestion5",
            options: [
                "What is the name of your first employer?",
                "What is your dream job?",
                "What was your high school mascot?"
            ]
        },
        {
            label: "Security Question 6",
            name: "securityQuestion6",
            options: [
                "What is your favorite sport?",
                "What is your favorite vacation destination?",
                "What is the name of your first teacher?"
            ]
        },
        {
            label: "Security Question 7",
            name: "securityQuestion7",
            options: [
                "What is your favorite fruit?",
                "What is your favorite season?",
                "What is the name of your favorite childhood friend?"
            ]
        },
        {
            label: "Security Question 8",
            name: "securityQuestion8",
            options: [
                "What is your favorite animal?",
                "What is your favorite subject in school?",
                "What is your favorite quote?"
            ]
        },
        {
            label: "Security Question 9",
            name: "securityQuestion9",
            options: [
                "What is your favorite TV show?",
                "What is your favorite genre of music?",
                "What was your first job?"
            ]
        },
        {
            label: "Security Question 10",
            name: "securityQuestion10",
            options: [
                "What is your favorite dessert?",
                "What is your favorite holiday?",
                "What was your favorite toy as a child?"
            ]
        },
    ];

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            {questions.map((question, index) => (
                <FormControl key={index} fullWidth margin="normal">
                    <InputLabel>{question.label}</InputLabel>
                    <Select
                        name={question.name}
                        value={formik.values[question.name]}
                        onChange={formik.handleChange}
                        label={question.label}
                    >
                        {question.options.map((option, idx) => (
                            <MenuItem key={idx} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ))}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Continue
            </Button>
        </Box>
    );
};

export default StepThree;
