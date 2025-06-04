import { t } from 'i18next';
import ThemeChangeButton from './ThemeChangeButton';

const themeType = {
	auto: 'auto',
	light: 'light',
	dark: 'dark',
} as const;

export default function ThemeSetting() {
	return (
		<div>
			<div>{t('layout.settingModal.theme.title')}</div>
			<div className='flex flex-row items-center justify-center'>
				<ThemeChangeButton theme={themeType.auto} />
                <ThemeChangeButton theme={themeType.light} />
                <ThemeChangeButton theme={themeType.dark} />
			</div>
		</div>
	);
}
