import { useTranslation } from 'react-i18next';

type LangSetButtonProps = {
	lang: string;
	changeLang: (lang: string) => void;
	nowLang: string;
};

export default function LangSetButton({ lang, changeLang, nowLang }: LangSetButtonProps) {
	const { t } = useTranslation();
	return (
		<div
			onClick={() => changeLang(lang)}
			className='flex flex-row w-fit h-fit my-1 px-2 py-1 justify-center items-center border-1 select-none cursor-pointer rounded-md'
		>
			<div className='w-3 h-3 border-1 rounded'>
				{lang === nowLang ? <div className='w-full h-full bg-green-500' /> : null}
			</div>
			<div className='ml-2'>{t('layout.settingModal.lang.button.' + lang)}</div>
		</div>
	);
}
