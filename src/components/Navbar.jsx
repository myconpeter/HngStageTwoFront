import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartSharp } from 'react-icons/io5';
import ItemList from './ItemList';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	return (
		<div className=' bg-white'>
			<div className='flex md:p-6 w-[100%] justify-evenly items-center'>
				<GiHamburgerMenu className='text-xl md:hidden' />

				<div className='md:w-1/3 md:relative w-[10px]'>
					<input
						className='md:w-2/3 md:p-2 md:rounded-3xl md:pl-2 hidden md:block'
						type='search'
						placeholder='Find your Product'
					/>

					<svg
						className='md:absolute md:left-72 md:top-1/2 md:transform md:-translate-y-1/2 md:text-gray-500'
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

				<div className='md:w-1/3 md:flex md:justify-center  md:items-center flex'>
					<div className=' border-2  border-normalGreen flex flex-col justify-center items-center'>
						<h1 className='text-2xl'>Shapel</h1>
						<p className=' text-xs'>Beauty Shop</p>
					</div>
				</div>

				<div className=' w-1/3 flex justify-end items-center'>
					<div className='flex justify-end items-center gap-5 '>
						<CiUser className='text-2xl font-bold' />
						<CiHeart className='md:text-2xl md:font-bold hidden' />
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
