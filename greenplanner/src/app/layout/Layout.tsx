import { Outlet } from 'react-router';
import Sidebar from './sidebar/Sidebar';
import Top from './top/Top';
import { useThemeStore } from '../store/themeStore';
import SettingModal from './settingmodal/SettingModal';
import { SettingModalPortal, SidebarPortal } from '@/src/utils/Portal';

export default function Layout({ children }: { children?: React.ReactNode }) {
	const { isDarkMode } = useThemeStore();

	const theme = isDarkMode ? 'dark' : 'light';

	return (
		<div data-theme={theme} className='min-h-screen dark:bg-gray-500'>
			<Top />
			<div className='w-full h-17' />
			<div className='mt-5 px-10'>
				<Outlet />
				{children}
			</div>
			<SidebarPortal>
				<Sidebar />
			</SidebarPortal>
			<SettingModalPortal>
				<SettingModal />
			</SettingModalPortal>
		</div>
	);
}
