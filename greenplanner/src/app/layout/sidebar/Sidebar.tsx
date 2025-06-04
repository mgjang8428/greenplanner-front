import { useSidebarStore } from '../store/sidebarStore';
import SidebarMenu from './components/sidebarmenu/SidebarMenu';
import SidebarTitle from './components/SidebarTitle';
import sidebarMenuSet from './sidebarMenuSetting.json';
import SettingButton from './components/SettingButton';

export default function Sidebar() {
	const { sidebarIsOpen, sidebarClose } = useSidebarStore();

	if (sidebarIsOpen) {
		const sidebarList = sidebarMenuSet.map((item) => {
			return <SidebarMenu key={item.title} menuTitle={item.title} childMenu={item.child} />;
		});

		return (
			<div>
				<div className='flex fixed flex-row w-screen h-screen z-20'>
					<div className='w-fit h-full border-1 bg-green-50/95'>
						<SidebarTitle />
						<div className='flex flex-col h-9/10 overflow-y-auto'>
							<div>{sidebarList}</div>
							<div className='flex flex-row items-center h-16 ml-7 mt-auto'>
								<SettingButton />
							</div>
						</div>
					</div>
					<div className='flex w-full h-full bg-gray-950/50' onClick={() => sidebarClose()} />
				</div>
			</div>
		);
	} else {
		return null;
	}
}
