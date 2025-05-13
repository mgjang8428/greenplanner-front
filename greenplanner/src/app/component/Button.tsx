type ButtonProps = {
	className?: string;
	children?: React.ReactNode;
	action?: () => void;
};

export default function Button({
	className = 'w-20 h-10 border-2 rounded-md bg-green-100 hover:bg-green-200',
	children = 'Button',
	action = () => {
		console.log('Button Click');
	},
}: ButtonProps) {
	return (
		<div className={className}>
			<div
				onClick={() => {
					action();
				}}
				className='w-full h-full flex justify-center items-center cursor-pointer select-none'
			>
				<div>{children}</div>
			</div>
		</div>
	);
}
