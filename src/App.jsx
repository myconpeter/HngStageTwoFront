import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
	createRoutesFromElements,
} from 'react-router-dom';

import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeBody from './components/HomeComponent/HomeBody';
import Navbar from './components/Navbar';
import HomeLayout from './layouts/HomeLayout';
import Index from './components/CattItems/Index';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<HomeLayout />}>
			<Route
				index
				element={<HomeBody />}
			/>

			<Route
				path='cart'
				element={<Index />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
