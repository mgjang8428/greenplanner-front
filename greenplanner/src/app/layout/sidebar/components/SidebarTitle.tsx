import Logo from '../../components/Logo';
import SidebarCloseButton from './SidebarCloseButton';

export default function SidebarTitle() {
	return (
		<div className='flex flex-row w-full h-fit mb-5 p-3 items-center'>
			<SidebarCloseButton />
			<div className='ml-5 mr-10'>
				<Logo />
			</div>
		</div>
	);
}
