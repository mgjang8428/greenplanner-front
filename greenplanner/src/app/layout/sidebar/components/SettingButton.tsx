import { useSettingModalStore } from '../../store/SettingModalStore';
import { useSidebarStore } from '../../store/sidebarStore';

export default function SettingButton() {
	const { settingModalOpen } = useSettingModalStore();
	const { sidebarClose } = useSidebarStore();

	return (
		<div
			onClick={() => {
				sidebarClose();
				settingModalOpen();
			}}
			className='cursor-pointer select-none'
		>
			<span className='material-symbols-outlined sidebaricon'>settings</span>
		</div>
	);
}
