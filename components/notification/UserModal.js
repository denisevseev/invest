import React from 'react';
import { Box, Typography } from '@mui/material';

const UserModal = ({ user, files }) => {
    if (!user) {
        return <Typography>Benutzerinformationen nicht verfügbar.</Typography>;
    }

    // Проверяем верификацию email и телефона
    const emailVerifiedMessage = user.emailVerified ? null : 'Ihre E-Mail-Adresse ist nicht bestätigt. Bitte bestätigen Sie Ihre E-Mail-Adresse.';
    const phoneVerifiedMessage = user.phoneVerified ? null : 'Ihre Telefonnummer ist nicht bestätigt. Bitte bestätigen Sie Ihre Telefonnummer.';

    // Проверяем количество загруженных файлов
    const passportFiles = files.passportFiles || [];
    const addressFiles = files.addressFiles || [];

    const passportMessage = passportFiles.length >= 3
        ? null
        : `Laden Sie mindestens 3 Kopien Ihres Reisepasses hoch. Aktuell hochgeladen: ${passportFiles.length}`;
    const addressMessage = addressFiles.length >= 2
        ? null
        : `Laden Sie mindestens 2 Adressnachweise hoch. Aktuell hochgeladen: ${addressFiles.length}`;

    return (
        <Box>
            {/* Сообщения о верификации */}
            {!user.emailVerified && (
                <Typography color="error"><strong>Achtung:</strong> {emailVerifiedMessage}</Typography>
            )}
            {!user.phoneVerified && (
                <Typography color="error"><strong>Achtung:</strong> {phoneVerifiedMessage}</Typography>
            )}

            {/* Сообщения о загруженных файлах */}
            {passportMessage && (
                <Typography color="error"><strong>Achtung:</strong> {passportMessage}</Typography>
            )}
            {addressMessage && (
                <Typography color="error"><strong>Achtung:</strong> {addressMessage}</Typography>
            )}

            {/* Сообщение, если все данные в порядке */}
            {user.emailVerified && user.phoneVerified && passportFiles.length >= 3 && addressFiles.length >= 2 && (
                <Typography color="success">Ihre Informationen sind vollständig und bestätigt!</Typography>
            )}
        </Box>
    );
};

export default UserModal;
