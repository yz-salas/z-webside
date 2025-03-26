import React from 'react';
import Header from '../pages/Header';
import About from '../pages/About';
import Service from '../pages/Service';
import Work from '../pages/Work';

const Home = () => {
	return (
		<div className="divide-y-[1px] divide-zinc-800/45">
			<Header />
			<About />
			<Service />
			<Work />
		</div>
	);
};

export default Home;
