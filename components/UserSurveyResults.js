import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, IconButton, TextField, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { Edit, Save } from '@mui/icons-material';
import store from './../stores/userStore';
import en from './../public/lang/en.json';
import de from './../public/lang/de.json';

const UserSurveyResults = () => {
    const [editMode, setEditMode] = useState({});
    const [formData, setFormData] = useState({ ...store.user });
    const lang = store.lang === 'de' ? de : en;
    const fields = lang.userSurveyResults.fields;

    const handleEditClick = (field) => {
        setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
        console.log(`Edit clicked for ${field}`);
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        console.log(`Changed ${field} to ${value}`);
    };

    const handleSaveClick = async (field) => {
        const value = formData[field];
        const userId = store.user._id;
        store.user[field] = value;
        setEditMode((prev) => ({ ...prev, [field]: false }));

        console.log(`Saving ${field} with value ${value} for user ${userId}`);

        await saveFieldToBackend(userId, field, value);
    };

    const saveFieldToBackend = async (userId, field, value) => {
        try {
            console.log(`Sending request to save: userId=${userId}, field=${field}, value=${value}`);

            const response = await fetch('/api/saveUserField', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, field, value }),
            });

            if (!response.ok) {
                throw new Error('Network error');
            }

            const data = await response.json();
            console.log('Successfully saved:', data);
        } catch (error) {
            console.error('Error saving field:', error);
        }
    };

    const getQuestionsByCategory = (category) => {
        switch (category) {
            case 'Basic Information':
                return ['firstName', 'lastName', 'dateOfBirth', 'nationality'];
            case 'Contact Information':
                return ['email', 'phoneNumber', 'fullAddress', 'city', 'postalCode', 'country'];
            case 'Questions and Answers':
                return ['employmentStatus', 'sourceOfFunds', 'netWorth', 'annualIncome', 'anticipatedAnnualDeposit', 'intendedPurpose', 'creditFundAccount', 'politicallyExposedPerson'];
            default:
                return [];
        }
    };

    const renderQuestions = (category) => {
        const keys = getQuestionsByCategory(category);
        return keys.map((key, index) => {
            const question = {
                label: fields[key],
                key,
                value: formData[key],
            };
            return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Paper elevation={3} sx={{ p: 2, mb: 2, border: '1px solid #ddd', position: 'relative', wordBreak: 'break-word' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                {editMode[question.key] ? (
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={question.value}
                                        onChange={(e) => handleChange(question.key, e.target.value)}
                                    />
                                ) : (
                                    <>
                                        <Typography variant="subtitle1" fontWeight="bold" sx={{ flex: 1 }}>
                                            {question.label}
                                        </Typography>
                                        <Typography variant="body2" sx={{ flex: 1 }}>
                                            {question.value}
                                        </Typography>
                                    </>
                                )}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                    <IconButton onClick={() => editMode[question.key] ? handleSaveClick(question.key) : handleEditClick(question.key)} size="small">
                                        {editMode[question.key] ? <Save /> : <Edit />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Paper>
                    </motion.div>
                </Grid>
            );
        });
    };

    return (
        <Card sx={{ maxWidth: 1200, mx: 'auto', mt: 10, p: 2, marginLeft: '15%' }}>
            <CardContent>
                <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                    {lang.userSurveyResults.myInformation}
                </Typography>
                <Divider sx={{ mb: 3 }} />

                {/* Основная информация */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        {lang.userSurveyResults.basicInformation}
                    </Typography>
                    <Grid container spacing={3}>
                        {renderQuestions('Basic Information')}
                    </Grid>
                </Box>
                <Divider sx={{ mb: 3 }} />

                {/* Контактная информация */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        {lang.userSurveyResults.contactInformation}
                    </Typography>
                    <Grid container spacing={3}>
                        {renderQuestions('Contact Information')}
                    </Grid>
                </Box>
                <Divider sx={{ mb: 3 }} />

                {/* Вопросы и ответы */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        {lang.userSurveyResults.questionsAndAnswers}
                    </Typography>
                    <Grid container spacing={3}>
                        {renderQuestions('Questions and Answers')}
                    </Grid>
                </Box>
                <Divider sx={{ mb: 3 }} />
            </CardContent>
        </Card>
    );
};

export default observer(UserSurveyResults);
