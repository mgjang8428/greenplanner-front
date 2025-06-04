import { useTranslation } from 'react-i18next';

export default function SignUpButton() {
	const { t } = useTranslation();
	return (
		<div className='ml-3 px-2 py-1 border-1 rounded-lg bg-green-400 cursor-pointer select-none'>
			<p>{t('layout.top.signUp')}</p>
		</div>
	);
}
