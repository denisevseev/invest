import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, IconButton, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { Edit, Save } from '@mui/icons-material';
import store from './../stores/userStore';

const UserSurveyResults = () => {
    const [editMode, setEditMode] = useState({});
    const [formData, setFormData] = useState({ ...store.user });

    const handleEditClick = (field) => {
        setEditMode({ ...editMode, [field]: !editMode[field] });
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSaveClick = (field) => {
        store.user[field] = formData[field]; // Save changes to the store
        setEditMode({ ...editMode, [field]: false });
    };

    const getQuestionsByCategory = (category) => {
        switch (category) {
            case 'Basic Information':
                return ['firstName', 'lastName', 'dateOfBirth', 'nationality', 'gender', 'maritalStatus'];
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
                label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
                key,
                value: formData[key]
            };
            return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Paper elevation={3} sx={{ p: 2, mb: 2, border: '1px solid #ddd', position: 'relative' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                    <IconButton onClick={() => handleEditClick(question.key)} size="small">
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
                <Typography sx={{textAlign: 'center'}} variant="h5" gutterBottom>My Information</Typography>

                {/* Основная информация */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>Basic Information</Typography>
                    <Grid container spacing={3}>
                        {renderQuestions('Basic Information')}
                    </Grid>
                </Box>

                {/* Контактная информация */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>Contact Information</Typography>
                    <Grid container spacing={3}>
                        {renderQuestions('Contact Information')}
                    </Grid>
                </Box>

                {/* Вопросы и ответы */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>Questions and Answers</Typography>
                    <Grid container spacing={3}>
                        {renderQuestions('Questions and Answers')}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}

export default observer(UserSurveyResults);
