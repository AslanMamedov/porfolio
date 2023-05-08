import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const config = {
	lng: 'en',
	fallbackLng: localStorage.getItem('i18nextLng') || 'en',
	detection: {
		order: ['queryString', 'cookie'] as const,
		cache: ['cookie'] as const,
	},
	interpolation: {
		escapeValue: false,
	},
	debug: false,
};

type Config = typeof config;

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	.init(config as Config);
export default i18n;
