import React from 'react';
import { Box, Typography } from '@mui/material';

const UserModal = ({ user, files }) => {
    if (!user) {
        return <Typography>Информация о пользователе недоступна.</Typography>;
    }

    // Проверяем верификацию email и телефона
    const emailVerifiedMessage = user.emailVerified ? null : 'Ваш email не подтвержден. Пожалуйста, подтвердите вашу почту.';
    const phoneVerifiedMessage = user.phoneVerified ? null : 'Ваш номер телефона не подтвержден. Пожалуйста, подтвердите ваш номер.';

    // Проверяем количество загруженных файлов
    const passportFiles = files.passportFiles || [];
    const addressFiles = files.addressFiles || [];

    const passportMessage = passportFiles.length >= 3
        ? null
        : `Загрузите минимум 3 скана паспорта. Сейчас загружено: ${passportFiles.length}`;
    const addressMessage = addressFiles.length >= 2
        ? null
        : `Загрузите минимум 2 скана адреса. Сейчас загружено: ${addressFiles.length}`;

    return (
        <Box>
            <Typography variant="h6">Информация о профиле</Typography>
            <Typography><strong>Компания:</strong> {user.companyName}</Typography>
            <Typography><strong>Страна:</strong> {user.country}</Typography>
            <Typography><strong>Email:</strong> {user.email}</Typography>
            <Typography><strong>Телефон:</strong> {user.phoneNumber}</Typography>

            {/* Сообщения о верификации */}
            {!user.emailVerified && (
                <Typography color="error"><strong>Внимание:</strong> {emailVerifiedMessage}</Typography>
            )}
            {!user.phoneVerified && (
                <Typography color="error"><strong>Внимание:</strong> {phoneVerifiedMessage}</Typography>
            )}

            {/* Сообщения о загруженных файлах */}
            {passportMessage && (
                <Typography color="error"><strong>Внимание:</strong> {passportMessage}</Typography>
            )}
            {addressMessage && (
                <Typography color="error"><strong>Внимание:</strong> {addressMessage}</Typography>
            )}

            {/* Сообщение, если все данные в порядке */}
            {user.emailVerified && user.phoneVerified && passportFiles.length >= 3 && addressFiles.length >= 2 && (
                <Typography color="success">Ваша информация полная и проверена!</Typography>
            )}
        </Box>
    );
};

export default UserModal;
