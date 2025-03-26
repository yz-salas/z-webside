import React from 'react';
import Divisor from '../components/UXUI/Divisor';
import BtnIcon from '../components/UXUI/BtnIcon';
const Service = () => {
	return (
		<div id="service" className="h-screen w-full overflow-y-hidden font-erode text-zinc-700">
			<div className="flex w-full h-[50vh] container">
				<div className="min-w-[48%] h-full flex justify-center items-end pb-[50px]">
					<h1 className="text-[32px] leading-[40px]">
						Con alrededor de tres años de preparación en desarrollo front-end. Mi enfoque se basa en la simplicidad y la elegancia, priorizando el
						diseño minimalista para ofrecer experiencias de usuario intuitivas y atractivas.
					</h1>
				</div>
				<div className="min-w-[51%] h-full ">
					<Divisor className="w-full h-full justify-center" text="Service" clas="font-bold text-[90px] text-white" />
				</div>
			</div>
			<Divisor className="w-full h-[20px] border-y-[1px] border-zinc-800" />
			<div className="w-full h-[50vh] flex container">
				<div className="w-[50%] h-full flex border-l-[1px] border-zinc-800">
					<section className="w-full h-full flex flex-col divide-y-[1px] divide-zinc-800">
						<div className="h-[30%] flex items-center justify-center p-[20px]">
							<div className="w-[70%]">
								<h1 className="text-[60px] text-white">Front-End</h1>
							</div>
							<div className="flex flex-wrap -space-y-[46px] w-full h-full">
								<BtnIcon title="Html" />
								<BtnIcon title="Css" />
								<BtnIcon title="JavaScript" />
								<BtnIcon title="ReactJs" />
								<BtnIcon title="TailwindCss" w="w-[100px]" />
								<BtnIcon title="Git" />
								<BtnIcon title="GitHub" />
							</div>
						</div>
						<div className="w-full max-h-full flex justify-center items-center p-[20px]">
							<p className="text-[25px] text-white">
								I'm a front-end developer with 3 years of experience, specializing in creating modern, optimized, and responsive interfaces. I'm
								passionate about clean and minimalist design, always ensuring a fluid and intuitive user experience.
							</p>
						</div>
					</section>
				</div>
				<Divisor className="min-w-[2%]" />
				<div className="w-[50%] h-full flex border-r-[1px] border-zinc-800">
					<section className="w-full h-full flex flex-col divide-y-[1px] divide-zinc-800">
						<div className="h-[30%] flex items-center p-[20px]">
							<h1 className="text-[60px] text-white">Mentor</h1>
						</div>
						<div className="w-full max-h-full flex justify-center items-center p-[20px]">
							<p className="text-[25px] text-white">
								As a front-end developer with 3 years of experience, I can guide you in your learning and growth in the world of web development. My
								focus is on offering practical advice, sharing real-life experiences, and helping you improve your code with best practices.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Service;
