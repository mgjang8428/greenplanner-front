import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './locale/ko.json';
import en from './locale/en.json';

const resources = {
	ko: {
		translation: ko,
	},
	en: {
		translation: en,
	},
};

i18next.use(initReactI18next).init({
	resources,
	lng: 'ko',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
