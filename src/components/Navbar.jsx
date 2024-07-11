import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartSharp } from 'react-icons/io5';
import ItemList from './ItemList';

const Navbar = () => {
	return (
		<div className=' bg-white'>
			<div className='flex p-6 w-[100%]'>
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
					<div className=' border-2 border-dashed border-normalGreen flex flex-col justify-center items-center'>
						<h1 className='text-2xl'>Shapel</h1>
						<p className=' text-xs'>Beauty Shop</p>
					</div>
				</div>

				<div className=' w-1/3 flex justify-end items-center'>
					<div className='flex justify-end items-center gap-5 '>
						<CiUser className='text-2xl font-bold' />
						<CiHeart className='text-2xl font-bold' />
						<IoCartSharp className='text-2xl font-bold' />
						<div className='px-2 py-1 bg-lightGreen rounded-full font-bold'>
							o
						</div>
					</div>
				</div>
			</div>

			{<ItemList />}
		</div>
	);
};

export default Navbar;
