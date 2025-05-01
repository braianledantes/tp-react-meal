import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslation from "./locals/es/translation.json";
import enTranslation from "./locals/en/translation.json";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next) 
    .init({
        resources: {
            es: {
                translation: esTranslation
            },
            en: {
                translation: enTranslation
            }
        },
        fallbackLng: "en",

        interpolation: {
            escapeValue: false 
        },

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], 
        },
    });

export default i18n;