import { useSettingModalStore } from '../store/SettingModalStore';
import LengSetting from './LangSetting';
import ThemeSetting from './ThemeSetting';
import { t } from 'i18next';

export default function SettingModal() {
	const { settingModalIsOpen, settingModalClose } = useSettingModalStore();
	if (settingModalIsOpen) {
		return (
			<div className='flex fixed w-screen h-screen z-20 justify-center items-center'>
				<div className='flex fixed w-screen h-screen bg-gray-950/50' onClick={() => settingModalClose()}></div>
				<div className='flex flex-col fixed w-100 h-100 bg-white border-2'>
					<div className='flex flex-row border-1'>
						<div className=''>
							<p className='text-2xl'>{t('layout.settingModal.title')}</p>
						</div>
						<div
							onClick={() => settingModalClose()}
							className='flex w-fit h-fit ml-auto m-2 border-1 select-none cursor-pointer'
						>
							<span className='material-symbols-outlined'>close</span>
						</div>
					</div>
					<ThemeSetting />
					<LengSetting />
				</div>
			</div>
		);
	} else return null;
}
