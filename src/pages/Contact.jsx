import React from 'react';
import ContainerDivisor from '../components/UXUI/ContainerDivisor';

const Contact = () => {
	return (
		<div id="contact" className="relative flex min-h-screen px-[40px] pt-[40px] w-full font-erode font-10 text-zinc-700 space-x-[15px]">
			<ContainerDivisor className="w-[50%] h-[40vh]">
				<div className="w-[100%] h-[50vh] pr-[20px] flex flex-col justify-center">
					<h2 className="text-white font-erode text-[56px] underline decoration-[15px] decoration-white/10 ">Let's get started</h2>
				</div>
			</ContainerDivisor>

			<form className="flex justify-center items-center w-[50%] min-h-screen space-y-4">
				<div className="flex flex-col space-y-5">
					<input type="text" className="border-[1px] w-[450px] px-3 py-2 focus:outline-none" placeholder="My Name Is" />
					<input type="text" className="border-[1px] w-[450px] px-3 py-2 focus:outline-none" placeholder="And I Have To A Webside" />
					<input type="text" className="border-[1px] w-[450px] px-3 py-2 focus:outline-none" placeholder="Enter your name" />
				</div>
			</form>
			<div className="absolute group min-w-[150px] w-auto transition duration-300 z-40 transform left-[150px] -top-[1050px] flex flex-col items-center justify-center">
				<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
				<div className="w-[1px] h-[1083px] bg-white/10 transition-all duration-300"></div>
				<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
			</div>
		</div>
	);
};

export default Contact;
