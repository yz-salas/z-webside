import React from 'react';
import ContainerDivisor from '../components/UXUI/ContainerDivisor';
import { href } from 'react-router-dom';

const Work = () => {
	const work = [
		{
			id: '001',
			href: '#',
			title: 'AOS Corporation',
			description:
				'My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months',
		},
		{
			id: '002',
			href: '#',
			title: 'DelfinesPark',
			description:
				'This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves.',
		},
		{
			id: '003',
			href: '#',
			title: 'App Salas',
			description: 'The project I am referring to is this same portfolio, it is developed in html, css, javaScript, tailwind, react',
		},
	];
	return (
		<>
			<div id="work" className="relative min-h-screen px-[40px] py-[40px] font-10 flex flex-col w-full ">
				<div className="w-[50%] min-h-[50vh] space-y-[20px] flex flex-col justify-center">
					<h2 className="text-zinc-500 font-erode text-[56px] underline decoration-[15px] decoration-white/10 ">I show you my work</h2>
					<p className="font-erode text-[24px] text-white">
						Here you'll find a selection of the projects I've worked on, each developed with modern technologies and a focus on clean, functional
						design. From attractive interfaces to interactive solutions, each project reflects my passion for web development and my commitment to
						quality.
					</p>
				</div>
				<div className="w-full space-y-[15px] flex flex-col items-end divide-y-[1px] divide-white/10">
					{work.map((iten) => (
						<ContainerDivisor className="min-h-[40vh] w-[80%]">
							<a href={iten.href} key={iten.id} className="flex transition-all duration-300 min-h-[40vh] w-[100%] group hover:bg-white/10 text-white">
								<section className="w-[100%] h-full flex items-center p-[20px]">
									<div className="w-[20%] h-full">
										<h2 className="text-[40px]">{iten.id}</h2>
									</div>
									<div className="h-[50%] w-[40%] flex items-center">
										<div className="w-[100%]">
											<h2 className="text-[70px] leading-[80px] text-zinc-500 underline decoration-[15px] decoration-white/10">{iten.title}</h2>
										</div>
									</div>
									<div className="w-[40%] max-h-full flex items-center">
										<p className="text-[24px]">{iten.description}</p>
									</div>
								</section>
							</a>
						</ContainerDivisor>
					))}
				</div>
				<div className="absolute group min-w-[150px] w-auto transition duration-300 z-40 transform left-[150px] -top-[270px] flex flex-col items-center justify-center">
					<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
					<div className="w-[1px] h-[330px] bg-white/10 transition-all duration-300"></div>
					<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
				</div>
			</div>
		</>
	);
};

export default Work;
