export default function SidebarMenuStateIcon({ isOpen }: { isOpen: boolean }) {
	if (isOpen) {
		return <span className='material-symbols-outlined'>remove</span>;
	} else {
        return <span className='material-symbols-outlined'>add</span>;
    }
}
