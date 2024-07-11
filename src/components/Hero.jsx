import HeroImg from '../assets/Hero.png';
import heroSmall from '../assets/heroSmall.png';

const Hero = () => {
	return (
		<div className='md:mt-8 w-[100%] mt-2'>
			<div className=' relative flex items-center md:mx-8'>
				<img
					src={heroSmall}
					alt='hero'
					className='md:h-96 w-[100%] h-[400px]'
				/>
				<div className=' ml-24  flex flex-col justify-start absolute w-1/3'>
					<p className='md:text-4xl  md:font-bold font-serif'>
						Your Daily
					</p>
					<p className='md:text-4xl  md:font-bold font-serif'>
						Dose Of Glow
					</p>

					<p className='md:text-xl md:mt-3'>
						We care about your skin
					</p>
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
