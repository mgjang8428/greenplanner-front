import LangSetButton from './LangSetButton';
import i18next, { t } from 'i18next';
import { useState } from 'react';

export default function LangSetting() {
	const nowLang = i18next.language;
	const [langState, setLangState] = useState(nowLang);

	const langChange = (lang: string) => {
		const confirmResult = window.confirm('언어 변경 시 사이트가 새로고침 됩니다.');
		if (confirmResult) {
			setLangState(lang);
			i18next.changeLanguage(lang);
			window.location.reload();
		}
	};
	return (
		<div>
			<div>{t('layout.settingModal.lang.title')}</div>
			<div className='grid grid-cols-3 place-items-center w-full px-5  border-1'>
				<LangSetButton lang='ko' changeLang={langChange} nowLang={langState} />
				<LangSetButton lang='en' changeLang={langChange} nowLang={langState} />
			</div>
		</div>
	);
}
