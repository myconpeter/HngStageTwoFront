import React from 'react';
import cart1 from '../../assets/cart1.png';
import { FaArrowRightLong } from 'react-icons/fa6';

const Index = () => {
	return (
		<div className='m-4 md:m-16'>
			<div>
				<h1 className='text-4xl font-bold'>Cart</h1>
			</div>

			<table className='table-auto mt-10 w-full'>
				<thead>
					<tr className='text-left bg-lightGray h-16'>
						<th>PRODUCT</th>
						<th>PRICE</th>
						<th>QUANTITY</th>
						<th>SUBTOTAL</th>
					</tr>
				</thead>
				<tbody className='mt-8 '>
					<tr className='h-16'>
						<td className='flex items-center'>
							{' '}
							<img
								src={cart1}
								alt='shop1'
							/>
							<p>Olay Vitamin C Brightening Body Lotion 502ML</p>
						</td>
						<td>₦33,000</td>
						<td className=''>
							<span className='font-bold'> -</span> 1{' '}
							<span className='font-bold'> +</span>
						</td>
						<td>₦33,000</td>
					</tr>

					<tr className='h-16 mt-8 border-y-2 border-black'>
						<td className='flex items-center'>
							{' '}
							<img
								src={cart1}
								alt='shop1'
							/>
							<p>Olay Vitamin C Brightening Body Lotion 502ML</p>
						</td>
						<td>₦33,000</td>
						<td className=''>
							<span className='font-bold'> -</span> 1{' '}
							<span className='font-bold'> +</span>
						</td>
						<td>₦33,000</td>
					</tr>
				</tbody>
			</table>

			<div className='w-full mt-10 flex flex-col justify-end items-end'>
				<div className='flex justify-between w-1/3 h-10 items-center bg-lightGray'>
					<p className='font-semibold pl-4'>TOTAL</p>
					<p className='font-semibold pr-4'>₦99,000</p>
				</div>
			</div>

			<div className='w-full mt-1 flex flex-col justify-end items-end'>
				<div className=' mt-5 flex gap-3 justify-center w-1/4 h-10 items-center bg-lightGreen'>
					<p className='font-semibold pl-4'>PROCEED TO CHECKOUT</p>
					<FaArrowRightLong />
				</div>
			</div>
		</div>
	);
};

export default Index;
