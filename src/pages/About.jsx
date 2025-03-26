import React from 'react';
import Divisor from '../components/UXUI/Divisor';
import MagnetLines from '../components/UXUI/MagnetLines';

const About = () => {
	return (
		<div id="about" className="w-full h-screen divide-x-[1px] divide-zinc-800/45 flex ">
			<div className="h-full min-w-[30%]">
				<Divisor className="w-full h-full" text="About Me" clas="absolute font-bold -left-[90px] trasform rotate-90 text-[90px] text-white" />
			</div>

			<div className="w-[70%] h-full flex divide-x-[1px] text-zinc-700 font-erode divide-zinc-800/45">
				<div className="flex justify-center items-center px-[20px] py-[30px]">
					<div className="text-[16px] md:text-[25px] lg:text-[18px] space-y-2">
						<p>My name is Zadiel Salas. I am 21 years old, and I am a self-taught front-end web developer.</p>

						<p>
							I have always loved the digital world, and since I was little, I have been very creative, dedicating myself to drawing, photography, and
							enjoying nature and travel. I found the perfect field to combine all these skills that I enjoy.
						</p>

						<p>
							My vision is to provide companies with modern web solutions that visually appeal to users. I believe in combining clean design and solid
							functionality to create seamless experiences.
						</p>

						<p>
							<a href="#work" className="text-white hover:decoration-solid hover:underline transition duration-300 font-Erode">
								I am passionate about turning ideas into reality, one line of code at a time.
							</a>
						</p>

						<p>
							Throughout my journey as a front-end developer, I have dedicated a significant amount of time to mastering the fundamental principles of
							CSS. I have worked on improving my ability to create responsive, visually appealing, and well-structured designs that enhance user
							experience.
						</p>

						<p>
							Similarly, I have invested considerable effort in learning and refining my skills in React. I am continuously exploring best practices,
							optimizing performance, and structuring components effectively to build{' '}
							<a href="#work" className="text-white hover:decoration-solid hover:underline transition duration-300 font-Erode">
								scalable and maintainable applications.
							</a>
						</p>

						<p>
							My goal is to keep growing as a developer, staying up to date with{' '}
							<a href="#service" className="text-white hover:decoration-solid hover:underline transition duration-300 font-Erode">
								the latest technologies
							</a>{' '}
							, and delivering high-quality solutions that meet both aesthetic and functional demands.
						</p>
					</div>
				</div>

				<Divisor className="min-w-[2%]" />

				<div className="flex justify-center flex-col h-full min-w-[38.8%]">
					<div className="flex justify-center items-center w-full px-[20px] py-[30px]">
						<a href="#contact" className="text-[40px] hover:underline hover:decoration-solid font-900 leading-[45px] text-white">
							Let's build something great together contact me
						</a>
					</div>
					<Divisor className="w-full h-[20px] border-x-[0px] border-y-[1px] border-zinc-800" />
					<div className="w-full h-[200px]">
						<MagnetLines
							rows={8}
							columns={9}
							containerSize="40vmin"
							lineColor="rgba(39, 39, 42)" // zinc-800/45
							lineWidth="0.1vmin"
							lineHeight="5vmin"
							baseAngle={0}
							style={{ margin: '2rem auto' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
