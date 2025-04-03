import React from 'react';
import ContainerDivisor from '../components/UXUI/ContainerDivisor';

const Service = () => {
	return (
		<div id="service" className="relative flex flex-col min-h-screen p-[40px] w-full font-erode font-10 text-zinc-700">
			{/* Degradado en el divide-x */}

			<div className="w-[50%] h-[40vh] space-y-[20px] flex flex-col justify-center">
				<h2 className="text-zinc-500 font-erode text-[56px] underline decoration-[15px] decoration-white/10 ">What are my services?</h2>
				<p className="font-erode text-[24px] text-white">
					With around three years of experience in front-end development, my approach is based on simplicity and elegance, prioritizing minimalist
					design to deliver intuitive and engaging user experiences.
				</p>
			</div>

			<div className="justify-end w-[100%] h-[50vh] flex divide-y-[1px] divide-white/10">
				<div className="flex justify-end w-full space-x-[15px]">
					<ContainerDivisor className="h-[80%] w-[30%]">
						<div className="flex justify-end h-[100%] w-[100%]">
							<section className="w-[100%] h-full flex flex-col">
								<div className="h-[30%] flex items-center p-[20px]">
									<div className="w-[70%]">
										<h2 className="text-[40px] text-zinc-500 underline decoration-[15px] decoration-white/10 ">Front-End</h2>
									</div>
								</div>
								<div className="w-full max-h-full flex items-center p-[20px]">
									<p className="text-[18px] text-white">
										I'm a front-end developer with 3 years of experience, specializing in creating modern, optimized, and responsive interfaces. I'm
										passionate about clean and minimalist design, always ensuring a fluid and intuitive user experience.
									</p>
								</div>
							</section>
						</div>
					</ContainerDivisor>
					<ContainerDivisor className="h-[80%] w-[30%]">
						<div className="flex justify-end h-[100%] w-[100%]">
							<section className="w-[100%] h-full flex flex-col">
								<div className="h-[30%] flex items-center p-[20px]">
									<h2 className="text-[40px] text-zinc-500 underline decoration-[15px] decoration-white/10 ">Mentor</h2>
								</div>
								<div className="w-full max-h-full flex items-center p-[20px]">
									<p className="text-[18px] text-white">
										As a front-end developer with 3 years of experience, I can guide you in your learning and growth in the world of web development.
										My focus is on offering practical advice, sharing real-life experiences, and helping you improve your code with best practices.
									</p>
								</div>
							</section>
						</div>
					</ContainerDivisor>
				</div>
			</div>
			<div className="absolute group min-w-[150px] w-auto transition duration-300 z-40 transform left-[150px] -top-[153px] flex flex-col items-center justify-center">
				<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
				<div className="w-[1px] h-[200px] bg-white/10 transition-all duration-300"></div>
				<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
			</div>
		</div>
	);
};

export default Service;
