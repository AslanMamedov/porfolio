import { IconArrow } from 'icons/index';
import { IUser } from './types';
import { useTranslation } from 'react-i18next';

function App() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};
	return (
		<>
			<IconArrow />
			<button onClick={() => changeLanguage('en')}>EN</button>
			<button onClick={() => changeLanguage('ru')}>RU</button>
			<button onClick={() => changeLanguage('az')}>AZ</button>
			<div>{t('text')}</div>
			<div>{t('hello')}</div>
		</>
	);
}

export default App;
