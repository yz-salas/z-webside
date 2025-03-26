import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../layout/Home';
import About from '../pages/About';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="#home" element={<Home />} />
			<Route path="#about" element={<About />} />
		</Routes>
	);
}

export default AppRouter;
