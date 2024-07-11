import item1 from '../../assets/itemOne.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import item4 from '../../assets/item4.png';
import item5 from '../../assets/item5.png';
import item6 from '../../assets/item6.png';
import { CiHeart } from 'react-icons/ci';

const NewArrivals = () => {
	return (
		<div className='mx-3 md:mx-16'>
			<div className='mt-16'>
				<div>
					<p className='text-2xl font-bold md:ml-10 ml-3'>
						New Arrivals
					</p>
				</div>

				<div className='flex flex-col items-center justify-center'>
					<div className=' flex gap-5 mt-4 justify-center items-center'>
						<div className='relative border-2 border-lightLemon flex flex-col items-center '>
							<img
								className='w-32'
								src={item1}
								alt='item1'
							/>

							<CiHeart className=' absolute  right-4 top-2 text-2xl' />

							<div className=' p-2 '>
								<p>Olay Vitamin C</p>
								<p> Brightening Body Lotion</p>
								<p> 502ML</p>
							</div>

							<p className='font-bold mt-4'>₦25,000</p>
						</div>

						<div className='relative border-2 border-lightLemon flex flex-col items-center '>
							<img
								className='w-32'
								src={item2}
								alt='item1'
							/>

							<CiHeart className=' absolute  right-4 top-2 text-2xl' />

							<div className=' p-2 '>
								<p>Olay Vitamin C</p>
								<p> Brightening Body Lotion</p>
								<p> 502ML</p>
							</div>

							<p className='font-bold mt-4'>₦25,000</p>
						</div>

						<div className='md:relative border-2 border-lightLemon md:flex flex-col items-center hidden '>
							<img
								className='w-32'
								src={item3}
								alt='item1'
							/>

							<CiHeart className=' absolute  right-4 top-2 text-2xl' />

							<div className=' p-2 '>
								<p>Olay Vitamin C</p>
								<p> Brightening Body Lotion</p>
								<p> 502ML</p>
							</div>

							<p className='font-bold mt-4'>₦25,000</p>
						</div>

						<div className='md:relative border-2 border-lightLemon md:flex flex-col items-center hidden '>
							<img
								className='w-32'
								src={item4}
								alt='item1'
							/>

							<CiHeart className=' absolute  right-4 top-2 text-2xl' />

							<div className=' p-2 '>
								<p>Olay Vitamin C</p>
								<p> Brightening Body Lotion</p>
								<p> 502ML</p>
							</div>

							<p className='font-bold mt-4'>₦25,000</p>
						</div>

						<div className='md:relative border-2 border-lightLemon md:flex flex-col items-center hidden  '>
							<img
								className='w-32'
								src={item5}
								alt='item1'
							/>

							<CiHeart className=' absolute  right-4 top-2 text-2xl' />

							<div className=' p-2 '>
								<p>Olay Vitamin C</p>
								<p> Brightening Body Lotion</p>
								<p> 502ML</p>
							</div>

							<p className='font-bold mt-4'>₦25,000</p>
						</div>

						<div className='md:relative border-2 border-lightLemon md:flex flex-col items-center hidden  '>
							<img
								className='w-32'
								src={item6}
								alt='item1'
							/>

							<CiHeart className=' absolute  right-4 top-2 text-2xl' />

							<div className=' p-2 '>
								<p>Olay Vitamin C</p>
								<p> Brightening Body Lotion</p>
								<p> 502ML</p>
							</div>

							<p className='font-bold mt-4'>₦25,000</p>
						</div>
					</div>

					<button className='mt-10  px-6 py-3 border-2 border-lightLemon font-bold '>
						VIEW ALL
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewArrivals;
