import HeroImg from '../assets/Hero.png';
import HeroI from '../assets/Hero.svg';

const Hero = () => {
	return (
		<div className='mt-8 w-[100%]'>
			<div className=' relative flex items-center mx-8'>
				<img
					src={HeroI}
					alt='hero'
					className='h-96 w-[100%] '
				/>
				<div className=' ml-24  flex flex-col justify-start absolute w-1/3'>
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
