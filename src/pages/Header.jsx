import React from 'react';
import DottedDivisor from '../components/UXUI/DottedDivisor';
import ContainerDivisor from '../components/UXUI/ContainerDivisor';

const Header = () => {
	return (
		<div id="home" className="text-white h-screen flex w-full">
			<div className="relative w-[100%] h-full px-[40px] flex flex-col -space-y-[20px]">
				<div className="h-full flex flex-col justify-between">
					<div className="flex items-center flex-col w-[100%] h-full z-10 font-erode">
						<div className="text-zinc-500 w-full text-[100px] font-10 -space-y-[40px] underline decoration-[20px] decoration-white/10 h-[50%]">
							<h1 className="">Hey There,</h1>
							<h1 className="">I'm Zadiel Salas.</h1>
						</div>
						<div className="flex justify-center h-[50%] w-[100%]">
							<ContainerDivisor className="h-[50%] w-[40%]">
								<h6 className="w-[100%] p-[20px] text-[28px] font-10">
									I create front-end websites, my design style is based on a clean and minimalist interface. As you slide down you will get to know me
									little by little.
								</h6>
							</ContainerDivisor>
						</div>
					</div>
				</div>
				<div className="absolute group min-w-[150px] w-auto transition duration-300 z-40 transform left-[150px] -bottom-[50px] flex flex-col items-center justify-center">
					<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
					<div className="w-[1px] h-[340px] bg-white/10 transition-all duration-300"></div>
					<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
				</div>
				{/*
				<div className="absolute group min-w-[150px] w-auto transition duration-300 z-40 transform left-[0px] bottom-[0px] flex flex-col items-center justify-center space-y-4">
					<a
						href="#about"
						className="flex justify-center cursor-pointer items-center text-white text-[15px] transition-all duration-300 tracking-[5px] hover:tracking-[10px] opacity-80 group-hover:opacity-100 w-full text-center"
					>
						Move
					</a>

					<div className="w-[1px] h-[200px] bg-white/10 transition-all duration-300"></div>
				</div>
					*/}

				{/*
				<div className="absolute transform rotate-90 -left-[270px] top-[280px] -translate-y-1/2 flex items-center space-x-4">
					<div className="w-[400px] h-[1px] bg-white/10"></div>
					<a href="mailto:sadielsalas35@gmail.com" className="text-white text-[15px] tracking-wider mb-[6px]">
						sadielsalas35@gmail.com
					</a>
				</div>
				*/}
			</div>
		</div>
	);
};

export default Header;
