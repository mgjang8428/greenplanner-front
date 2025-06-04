import { useTranslation } from 'react-i18next';

export default function SignInButton() {
	const { t } = useTranslation();
	return (
		<div className='px-2 py-1 border-1 rounded-lg bg-green-400 cursor-pointer select-none'>
			<p>{t('layout.top.signIn')}</p>
		</div>
	);
}
