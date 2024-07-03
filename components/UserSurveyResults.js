import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import {observer} from "mobx-react-lite";
import store from './../stores/userStore';

const UserSurveyResults = ({}) => {
    let user = store.user;

    // Создаем массив вопросов и ответов из объекта user
    const questions = Object.entries(user).map(([key, value]) => ({
        label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), // Преобразуем ключ в читаемый формат
        value
    }));

    return (
        <Card sx={{ maxWidth: 1200,  mx: 'auto', mt: 15 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>My questions and answers</Typography>
                <Grid container spacing={2}>
                    {questions.map((question, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Paper elevation={3} sx={{ p: 2, mb: 2, border: '1px solid #ddd' }}>
                                    <Typography variant="subtitle1" fontWeight="bold">{question.label}</Typography>
                                    <Typography variant="body2">{question.value}</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default observer(UserSurveyResults);
