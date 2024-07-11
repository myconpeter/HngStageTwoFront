import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartSharp } from 'react-icons/io5';

const Navbar = () => {
	return (
		<div className=' bg-lightGray'>
			<div className='flex p-6 w-screen'>
				<div className='w-1/3 relative'>
					<input
						className='w-2/3 p-2 rounded-3xl pl-2'
						type='search'
						placeholder='Find your Product'
					/>
					<svg
						className='absolute left-72 top-1/2 transform -translate-y-1/2 text-gray-500'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						width='20'
						height='20'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M10 21a9 9 0 100-18 9 9 0 000 18zM21 21l-4.35-4.35'
						/>
					</svg>
				</div>

				<div className='w-1/3 flex justify-center items-center'>
					<div>
						<h1>Shapel</h1>
					</div>
				</div>

				<div className=' w-1/3 flex justify-end items-center'>
					<div className='flex justify-end gap-5 '>
						<CiUser className='text-2xl font-bold' />
						<CiHeart className='text-2xl font-bold' />
						<IoCartSharp className='text-2xl font-bold' />
						<p className='p-1 bg-lightGreen rounded-full'> 0</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
