import { useSidebarStore } from '../../store/sidebarStore';

export default function SideBarOpenButton() {
	const { sidebarOpen } = useSidebarStore();

	return (
		<button onClick={() => sidebarOpen()} className='flex w-fit h-fit select-none cursor-pointer'>
			<span className='material-symbols-outlined sidebaricon'>menu</span>
		</button>
	);
}
