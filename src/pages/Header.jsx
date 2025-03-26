import React from 'react';
import Navbar from '../routes/Navbar';
import Divisor from '../components/UXUI/Divisor';

const Header = () => {
	return (
		<div id='home' className="h-screen flex w-full divide-x-[1px] divide-zinc-800/45">
			<div className="min-w-[57.2%] h-full container flex flex-col justify-end -space-y-[50px]">
				<h1 className="text-[80px] font-erode font-10 text-zinc-700">Hey There</h1>
				<h1 className="text-[100px] font-erode font-900 text-white">I'M Zadiel Salas</h1>
			</div>

			<Divisor className="w-[3.7%]" />

			<div className="container min-w-[39.1%] h-full flex justify-center items-center">
				<h1 className="text-[45px] text-zinc-700 font-erode">
					I create front-end websites, my design style is based on a clean and minimalist interface.
				</h1>
			</div>
		</div>
	);
};

export default Header;
