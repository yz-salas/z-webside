import React from 'react';
import Divisor from '../components/UXUI/Divisor';
import Carts from '../components/Carts';
import { CanvasRevealEffectDemo } from '../components/UXUI/CanvasRevealEffectDemo';
import PatternButton from '../components/Btn/PatternButton';

const Work = () => {
	return (
		<>
			<div id="work" className="h-screen flex w-full divide-x-[1px] divide-zinc-800/45">
				<div className="min-w-[50%] h-full container flex flex-col justify-center items-center -space-y-[50px]">
					<div className="space-y-[20px]">
						<div>
							<h1 className="text-zinc-700 font-erode text-[35px]">
								Here you'll find a selection of the projects I've worked on, each developed with modern technologies and a focus on clean, functional
								design. From attractive interfaces to interactive solutions, each project reflects my passion for web development and my commitment to
								quality.
							</h1>
						</div>
						<div>
							<PatternButton text="Contact Me" className2="text-zinc-700" className="w-[200px] h-[50px] cursor-pointer" />
						</div>
					</div>
				</div>

				<Divisor className="min-w-[1.4%]" />

				<div className="min-w-[41.4%] max-h-full flex justify-center items-center pt-[78px]">
					<CanvasRevealEffectDemo />
				</div>
			</div>
		</>
	);
};

export default Work;
