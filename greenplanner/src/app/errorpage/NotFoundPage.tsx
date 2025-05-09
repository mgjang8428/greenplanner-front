import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
	const { t } = useTranslation();
	return <div>{t(`notfound-page.text`)}</div>;
}
