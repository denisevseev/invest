import React from 'react';
import { Box, Typography } from '@mui/material';

const UserModal = ({ user, files }) => {

    if (!user) {
        return <Typography>Benutzerinformationen nicht verfügbar.</Typography>;
    }

    const userNameUpdated = !user.updatedName ? null : 'Da Sie Ihren Namen geändert haben, müssen Sie Ihren Reisepass neu hochladen.';

    // Проверяем количество загруженных файлов
    const passportFiles = files.passportFiles || [];
    const addressFiles = files.addressFiles || [];

    const passportMessage = passportFiles.length >= 3
        ? null
        : `Laden Sie mindestens 3 Kopien Ihres Reisepasses hoch.`;
    const addressMessage = addressFiles.length >= 2
        ? null
        : `Laden Sie mindestens 2 Adressnachweise hoch.`;

    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5', // Светлый фон
                borderRadius: '8px',
                padding: '16px',
                boxShadow: 3,
            }}
        >

            {user.updatedName && (
                <Typography sx={{ mb: 2, color: '#333' }}>
                    <strong>Achtung:</strong> {userNameUpdated}
                </Typography>
            )
            }

            {/* Сообщения о загруженных файлах */}
            {passportMessage && (
                <Typography sx={{ mb: 2, color: '#333' }}>
                    <strong>Achtung:</strong> {passportMessage} Aktuell hochgeladen: <span style={{ color: 'red' }}> {passportFiles.length}</span>
                </Typography>
            )}
            {addressMessage && (
                <Typography sx={{ mb: 2, color: '#333' }}>
                    <strong>Achtung:</strong> {addressMessage} Aktuell hochgeladen: <span style={{ color: 'red' }}> {addressFiles.length}</span>
                </Typography>
            )}

            {/* Сообщение, если все данные в порядке */}
            {user.emailVerified && user.phoneVerified && passportFiles.length >= 3 && addressFiles.length >= 2 && (
                <Typography sx={{ color: '#4caf50' }}>Ihre Informationen sind vollständig und bestätigt!</Typography>
            )}
        </Box>
    );
};

export default UserModal;
