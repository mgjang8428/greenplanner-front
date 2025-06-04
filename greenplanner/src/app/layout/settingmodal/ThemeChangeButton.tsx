import { useThemeStore } from '../../store/themeStore';
import { t } from 'i18next';

const themeType = {
	auto: 'auto',
	light: 'light',
	dark: 'dark',
} as const;

type Theme = (typeof themeType)[keyof typeof themeType];

type ThemeChangeButtonProps = {
	theme: Theme;
};

export default function ThemeChangeButton({ theme }: ThemeChangeButtonProps) {
	const { themeReset, themeChangeLight, themeChangeDark } = useThemeStore();

	switch (theme) {
		case themeType.light: {
			return (
				<div
					onClick={() => themeChangeLight()}
					className='flex flex-col mx-3 justify-center items-center select-none cursor-pointer'
				>
					<span className='material-symbols-outlined'>light_mode</span>
					<p>{t('layout.settingModal.theme.button.light')}</p>
				</div>
			);
		}
		case themeType.dark: {
			return (
				<div
					onClick={() => themeChangeDark()}
					className='flex flex-col mx-3 justify-center items-center select-none cursor-pointer'
				>
					<span className='material-symbols-outlined'>dark_mode</span>
					<p>{t('layout.settingModal.theme.button.dark')}</p>
				</div>
			);
		}
		default: {
			return (
				<div
					onClick={() => themeReset()}
					className='flex flex-col mx-3 justify-center items-center select-none cursor-pointer'
				>
					<span className='material-symbols-outlined'>night_sight_auto</span>
					<p>{t('layout.settingModal.theme.button.auto')}</p>
				</div>
			);
		}
	}
}
