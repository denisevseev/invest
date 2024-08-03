import React, { createContext, useState } from 'react';
import enTranslations from './../public/lang/en.json';
import deTranslations from './../public/lang/de.json';

export const TranslationContext = createContext();

const translations = {
    en: enTranslations,
    de: deTranslations
};

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <TranslationContext.Provider value={{ language, changeLanguage, translations }}>
            {children}
        </TranslationContext.Provider>
    );
};
