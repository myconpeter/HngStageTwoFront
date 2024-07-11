import Hero from '../Hero';
import BestSellers from './BestSellers';
import FooterHero from './FooterHero';
import NewArrivals from './NewArrivals';
import OnSale from './OnSale';
import ShopNow from './ShopNow';

const HomeBody = () => {
	return (
		<div>
			{<Hero />}
			{<NewArrivals />}
			{<BestSellers />}
			{<ShopNow />}
			{<OnSale />}
			{<FooterHero />}
		</div>
	);
};

export default HomeBody;
