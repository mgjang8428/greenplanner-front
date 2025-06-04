import { Link } from 'react-router';

export default function Logo() {
	return (
		<Link to='/' className='w-fit h-fit select-none'>
			<p className='text-3xl font-bold  dark:text-gray-100'>GreenPlanner</p>
		</Link>
	);
}
