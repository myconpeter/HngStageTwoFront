import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='mt-10 bg-lightLemon md:h-80 h-[1300px]'>
			<div className='md:flex md:flex-row flex-col my-20  md:my-10 mx-4 h-80 '>
				<div className='w-1/4 h-full  flex flex-col justify-center'>
					<div className=' w-16 border-2 border-dashed border-normalGreen flex flex-col justify-center items-center'>
						<h1 className='text-[14px]'>Shapel</h1>
						<p className=' text-[10px]'>Beauty Shop</p>
					</div>

					<div className='mt-6'>
						<p>Subscribe to our mailing list to</p>
						<p>get the new updates</p>
					</div>

					<div className='mt-10 flex gap-5'>
						<FaFacebook className='text-blue-900 text-3xl' />
						<RiTwitterXFill className='text-3xl' />
						<FaSquareInstagram className='text-pink-700 text-3xl' />
						<FaYoutube className='text-red-800 text-3xl' />
					</div>
				</div>

				<div className='w-full md:w-1/4  h-full flex flex-col justify-center '>
					<p className='font-bold text-xl mb-6'>INFORMATION</p>

					<div className='flex flex-col gap-4'>
						<p>About Us</p>

						<p>Contact</p>

						<p>How we source</p>

						<p>Identifying False Products</p>
					</div>
				</div>

				<div className=' w-full md:w-1/4 h-full flex flex-col justify-center '>
					<p className='font-bold text-xl mb-6'>OUR SERVICE</p>

					<div className='flex flex-col gap-4'>
						<p>Shipping & Delivery</p>

						<p>Refunds & Returns</p>

						<p>Book A Consultation</p>
					</div>
				</div>

				<div className='w-full md:w-1/4 h-full flex flex-col justify-center '>
					<p className='font-bold text-xl mb-6'>MY ACCOUNT</p>

					<div className='flex flex-col gap-4'>
						<p>My Account</p>

						<p>My Cart</p>

						<p>Checkout</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
