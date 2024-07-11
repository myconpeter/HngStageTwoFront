import HeroImg from '../../assets/hero2.png';

const FooterHero = () => {
	return (
		<div className='mt-8 w-[100%]'>
			<div className=' relative flex items-center mx-8'>
				<img
					src={HeroImg}
					alt='hero'
					className='h-96 w-screen '
				/>
				<div className=' ml-24  flex flex-col justify-start absolute w-1/3'>
					<p className='text-4xl  font-bold font-serif'>
						Grab 20% Off
					</p>
					<p className='text-4xl  font-bold font-serif'>
						Chemical Peeling
					</p>
					<p className='text-4xl  font-bold font-serif'>Today!</p>

					<p className='text-xl mt-3'>
						Offer valid from july 2nd - July 9th
					</p>
					<button className='px-0 w-2/4 py-3 mt-8 bg-normalGreen font-bold rounded-xl'>
						BOOK NOW
					</button>
				</div>
			</div>
		</div>
	);
};

export default FooterHero;
