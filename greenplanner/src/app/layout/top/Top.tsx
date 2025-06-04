import AccountInfoButton from './components/AccountInfoButton';
import Logo from '../components/Logo';
import SideBarOpenButton from './components/SidebarOpenButton';
import { useAccountStore } from '../../store/accountStore';
import SignInButton from './components/SignInButton';
import SignUpButton from './components/SignUpButton';

export default function Top() {
	const { isSignIn } = useAccountStore();

	return (
		<div className='flex flex-row fixed w-full h-fit z-10 p-3 items-center border-1 bg-green-100/90 dark:bg-green-900/90'>
			<SideBarOpenButton />
			<div className='ml-5'>
				<Logo />
			</div>
			{isSignIn ? (
				<div className='ml-auto'>
					<AccountInfoButton />
				</div>
			) : (
				<div className='flex flex-row ml-auto'>
					<SignInButton />
					<SignUpButton />
				</div>
			)}
		</div>
	);
}
