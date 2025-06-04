import { useSidebarStore } from '../../store/sidebarStore';

export default function SidebarCloseButton() {
	const { sidebarClose } = useSidebarStore();
	return (
		<button onClick={() => sidebarClose()} className='flex w-fit h-fit select-none cursor-pointer'>
			<span className='material-symbols-outlined sidebaricon'>arrow_menu_close</span>
		</button>
	);
}
