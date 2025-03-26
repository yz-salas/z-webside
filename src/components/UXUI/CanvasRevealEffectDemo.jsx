'use client';
import React from 'react';
import Divisor from './Divisor';
import BtnIcon from './BtnIcon';
import { div } from 'framer-motion/m';

export function CanvasRevealEffectDemo() {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-4 mx-auto px-8">
			<Card
				title="AOS Corporation"
				des="My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months"
			/>
			<Card
				title="DelfinesPark"
				des="This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves."
			/>
			<Card title="App Salas" des="The project I am referring to is this same portfolio, it is developed in html, css, javaScript, tailwind, react" />
		</div>
	);
}

const Card = ({ title, des }) => {
	const titleicons = ['Html', 'Css', 'JavaScript', 'Tailwind', 'React', 'Git', 'GitHub'];

	return (
		<div className="border group hover:bg-zinc-800/45 border-zinc-800/45 flex flex-col w-full cursor-pointer max-w-lg mx-auto relative h-[13rem] font-erode">
			<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

			<div className="w-full h-[20%] relative z-20">
				<div className="w-full h-full mx-auto flex">
					<Divisor className="w-full h-full pl-[20px] border-[1px] border-zinc-800" text={title} clas="text-[20px] text-white" />
				</div>
			</div>
			<div className="h-[80%] w-full p-[20px]">
				<div className="duration-200 ease-in-out w-full h-[50%] text-white">
					<p className="leading-[20px]">{des}</p>
				</div>

				<div className="flex flex-wrap h-[50%] items-end">
					{titleicons.map((tech, index) => (
						<BtnIcon key={index} w="w-[100px]" title={tech} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;

// Icon.jsx
export const Icon = ({ className, ...rest }) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
	</svg>
);
