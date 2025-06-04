import { useState } from 'react';
import SidebarMenuStateIcon from './SidebarMenuStateIcon';
import SidebarMenuChild from './SidebarMenuChild';

type ChildMenuProps = {
	title: string;
	link: string;
};

type MenuProps = {
	menuTitle: string;
	childMenu: ChildMenuProps[];
};

export default function SidebarMenu({ menuTitle, childMenu }: MenuProps) {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const doOpenClose = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	const childMenuList = childMenu.map((item) => {
		return <SidebarMenuChild key={item.title} menuTitle={item.title} menuLink={item.link} />;
	});

	return (
		<div>
			<div
				className='flex flex-row justify-center items-center h-18 mx-3 my-3 border-1 bg-white select-none cursor-pointer'
				onClick={doOpenClose}
			>
				<div className='ml-8'>
					<p className='text-2xl'>{menuTitle}</p>
				</div>
				<div className='ml-auto mr-8'>
					<SidebarMenuStateIcon isOpen={menuIsOpen} />
				</div>
			</div>
			{menuIsOpen ? <div className='ml-10 mr-3'>{childMenuList}</div> : <div></div>}
		</div>
	);
}
