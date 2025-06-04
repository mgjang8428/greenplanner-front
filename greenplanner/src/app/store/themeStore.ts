import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
	isDarkMode: boolean | null;
	isAutoDetect: boolean;
	themeReset: () => void;
	themeChangeLight: () => void;
	themeChangeDark: () => void;
};

// isDarkMode true == dark, false == light
// window.matchMedia('(prefers-color-scheme: dark)').matches의 결과 => true: dark, false: light
export const useThemeStore = create(
	persist<ThemeStore>(
		(set, get) => ({
			isAutoDetect: true,
			isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
			themeReset: () => {
				useThemeStore.persist.clearStorage();
				set(() => ({
					isAutoDetect: true,
					isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
				}));
			},
			themeChangeLight: () => {
				set(() => ({ isAutoDetect: false, isDarkMode: false }));
			},
			themeChangeDark: () => {
				set(() => ({ isAutoDetect: false, isDarkMode: true }));
			},
		}),
		{
			name: 'themeStore',
		},
	),
);
