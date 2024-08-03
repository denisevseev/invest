import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useRouter } from 'next/router';
import GermanFlagIcon from '@mui/icons-material/Flag'; // Замените иконки на флаги
import UKFlagIcon from '@mui/icons-material/Flag'; // Замените иконки на флаги

const LanguageSwitcher = ({ currentLanguage }) => {
    const router = useRouter();

    const changeLanguage = (lang) => {
        // Отправить запрос на сервер для изменения языка пользователя
        fetch('/api/change-language', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ language: lang }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Обновить страницу или состояние после изменения языка
                router.reload();
            })
            .catch((error) => console.error('Error changing language:', error));
    };

    return (
        <>
            <Tooltip title="Deutsch">
                <IconButton onClick={() => changeLanguage('de')} color={currentLanguage === 'de' ? 'primary' : 'default'}>
                    <GermanFlagIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="English">
                <IconButton onClick={() => changeLanguage('en')} color={currentLanguage === 'en' ? 'primary' : 'default'}>
                    <UKFlagIcon />
                </IconButton>
            </Tooltip>
        </>
    );
};

export default LanguageSwitcher;
