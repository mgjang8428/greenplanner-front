import { Link } from 'react-router';

type childMenuProps = {
	menuTitle: string;
	menuLink: string;
};

export default function SidebarMenuChild({ menuTitle, menuLink }: childMenuProps) {
	return (
		<Link to={menuLink}>
			<div className='flex h-15 my-2 border-1 items-center bg-white cursor-pointer select-none'>
				<div className='ml-5'>
					<p className='text-xl'>{menuTitle}</p>
				</div>
			</div>
		</Link>
	);
}
