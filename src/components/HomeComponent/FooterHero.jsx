import { useEffect, useState } from 'react';
import heroFooterBig from '../../assets/hero2.png';
import heroFooterSmall from '../../assets/footerHeroSmall.png';

const FooterHero = () => {
	const [imageSrc, setImageSrc] = useState(heroFooterBig);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 950) {
				setImageSrc(heroFooterBig);
			} else {
				setImageSrc(heroFooterSmall);
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
		<div className='mt-8 w-[100%]'>
			<div className=' relative flex items-center mx-8'>
				<img
					src={imageSrc}
					alt='hero'
					className='h-96 w-screen '
				/>
				<div className=' ml-4 md:ml-24  flex flex-col justify-start absolute w-1/3'>
					<p className='md:text-4xl  font-bold font-serif'>
						Grab 20% Off
					</p>
					<p className='md:text-4xl  font-bold font-serif'>
						Chemical Peeling
					</p>
					<p className='text-4xl  font-bold font-serif'>Today!</p>

					<p className='text-xl mt-3'>
						Offer valid from july 2nd - July 9th
					</p>
					<button className='text-xs px-0 w-2/4 py-3 mt-8 bg-normalGreen font-bold rounded-xl'>
						BOOK NOW
					</button>
				</div>
			</div>
		</div>
	);
};

export default FooterHero;
