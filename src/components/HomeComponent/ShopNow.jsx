import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop3.png';
import shop4 from '../../assets/shop4.png';

const ShopNow = () => {
	return (
		<div className='mt-10 mx-8'>
			<div className='md:mx-16 md:gap-3 md:flex md:flex-row flex-col space-y-4'>
				<div className='relative w-[320px]'>
					<img
						src={shop1}
						alt='shop1'
						className='rounded-xl '
					/>

					<button className='absolute px-3 py-2 top-1 left-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Cleansers
					</button>
					<button className='absolute px-3 py-2 bottom-1 right-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Shop Now
					</button>
				</div>
				<div className='relative w-[320px]'>
					<img
						src={shop2}
						alt='shop1'
						className='rounded-xl'
					/>

					<button className='absolute px-3 py-2 top-1 left-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Toner
					</button>
					<button className='absolute px-3 py-2 bottom-1 right-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Shop Now
					</button>
				</div>
				<div className='hidden md:flex md:relative w-[320px]'>
					<img
						src={shop3}
						alt='shop1'
						className='rounded-xl'
					/>

					<button className='absolute px-3 py-2 top-1 left-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Blams
					</button>
					<button className='absolute px-3 py-2 bottom-1 right-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Shop Now
					</button>
				</div>
				<div className='hidden md:flex md:relative w-[320px]'>
					<img
						src={shop4}
						alt='shop1'
						className='rounded-xl'
					/>

					<button className='absolute px-3 py-2 top-1 left-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Sheet Mask
					</button>
					<button className='absolute px-3 py-2 bottom-1 right-1 rounded-lg shadow-xl border-2 border-black bg-white font-bold '>
						Shop Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShopNow;
