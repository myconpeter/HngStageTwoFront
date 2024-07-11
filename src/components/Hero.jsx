import HeroImg from '../assets/Hero.png';

const Hero = () => {
	return (
		<div className='mt-8 w-screen'>
			<div className=' relative flex mx-8  items-center'>
				<img
					src={HeroImg}
					alt='hero'
					className='h-96 w-screen'
				/>
				<div className=' ml-4  flex flex-col justify-start absolute w-1/3'>
					<p className='text-4xl  font-bold font-serif'>Your Daily</p>
					<p className='text-4xl  font-bold font-serif'>
						Dose Of Glow
					</p>

					<p className='text-xl mt-3'>We care about your skin</p>
					<button className='px-0 w-2/4 py-3 mt-8 bg-normalGreen font-bold rounded-xl'>
						{' '}
						BOOK A CONSULTAION{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
