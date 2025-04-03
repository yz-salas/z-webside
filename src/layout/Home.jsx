import React from 'react';
import Header from '../pages/Header';
import About from '../pages/About';
import Service from '../pages/Service';
import Work from '../pages/Work';
import ContainerWithDividers from '../components/UXUI/ContainerWithDividers';
import Contact from '../pages/Contact';

const Home = () => {
	return (
		<ContainerWithDividers>
			<Header />
			<About />
			<Service />
			<Work />
			<Contact />
		</ContainerWithDividers>
	);
};

export default Home;
