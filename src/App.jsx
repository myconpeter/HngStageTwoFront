import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeBody from './components/HomeComponent/HomeBody';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<HomeBody />
			{<Footer />}
		</div>
	);
}

export default App;
