import { useState, useEffect } from 'react';
import heroLarge from '../assets/Hero.png';
import heroSmall from '../assets/heroSmall.png';

const Hero = () => {
	const [imageSrc, setImageSrc] = useState(heroLarge);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 950) {
				setImageSrc(heroLarge);
			} else {
				setImageSrc(heroSmall);
			}
		};

		// Initial check
		handleResize();

		// Event listener for window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='md:mt-8 w-[100%] mt-2'>
			<div className=' relative flex items-center md:mx-8'>
				<img
					src={imageSrc}
					alt='hero'
					className='md:h-96 w-[100%] h-[400px]'
				/>
				<div className=' md:ml-24  flex flex-col justify-start absolute md:w-1/3 ml-2 '>
					<p className='md:text-4xl  font-bold font-serif text-3xl'>
						Your Daily
					</p>
					<p className='md:text-4xl  text-3xl font-bold font-serif'>
						Dose Of Glow
					</p>

					<p className='md:text-xl md:mt-3'>
						We care about your skin
					</p>
					<button className='px-0 w-2/4 py-3 mt-8 bg-normalGreen font-bold rounded-xl text-xs'>
						{' '}
						BOOK A CONSULTAION{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
