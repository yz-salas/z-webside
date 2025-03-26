import React, { useState, useEffect } from 'react';
import BtnLinks from '../components/UXUI/BtnLinks';

const Navbar = () => {
	const [isShrunk, setIsShrunk] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight / 2) {
				setIsShrunk(true);
			} else {
				setIsShrunk(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`w-full ${
				isShrunk ? 'h-[10vh]' : 'h-[20vh]'
			} fixed top-0 left-0 group divide-x-[1px] divide-zinc-800/45 font-erode font-10 flex border-b-[1px] border-zinc-800/45 bg-zinc-950 backdrop-blur-md z-50 transition-all duration-300`}
		>
			<div className="w-[30%] h-full text-[60px] flex container items-center space-x-[10px] text-white">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e3e3e3">
						<path d="m480.5-434-382-194.5 382-195 382.5 195L480.5-434Zm0 148.5L121-468.5l26.5-14.5 333 168L814-483l26.5 14.5-360 183Zm0 148.5L121-320l26.5-14.5 333 168 333.5-168 26.5 14.5-360 183Zm0-326 330-165.5-330-165.5L151-628.5 480.5-463Zm1-165.5Z" />
					</svg>
				</div>
				<h1>Front - End</h1>
			</div>
			<div className="w-[70%] space-x-[20px] flex">
				<BtnLinks
					title="HOME"
					url="#home"
					className="w-[20%] h-full border-r-[1px] border-zinc-800/45 hover:bg-zinc-800/45 flex justify-center items-center text-white cursor-pointer transition duration-200 ease-in-out text-[19px]"
				/>
				<BtnLinks
					title="ABOUT ME"
					url="#about"
					className="w-[20%] h-full border-x-[1px] border-zinc-800/45 hover:bg-zinc-800/45 flex justify-center items-center text-white cursor-pointer transition duration-200 ease-in-out text-[19px]"
				/>
				<BtnLinks
					title="SERVICE"
					url="#service"
					className="w-[20%] h-full border-x-[1px] border-zinc-800/45 hover:bg-zinc-800/45 flex justify-center items-center text-white cursor-pointer transition duration-200 ease-in-out text-[19px]"
				/>
				<BtnLinks
					title="WORKS"
					url="#work"
					className="w-[20%] h-full border-x-[1px] border-zinc-800/45 hover:bg-zinc-800/45 flex justify-center items-center text-white cursor-pointer transition duration-200 ease-in-out text-[19px]"
				/>
				<BtnLinks
					title="CONTACT"
					url="#contact"
					className="w-[20%] h-full border-x-[1px] border-zinc-800/45 hover:bg-zinc-800/45 flex justify-center items-center text-white cursor-pointer transition duration-200 ease-in-out text-[19px]"
				/>
			</div>
		</div>
	);
};

export default Navbar;
