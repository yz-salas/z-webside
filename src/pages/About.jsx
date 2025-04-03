import React from 'react';
import img from '../assets/image/img.jpeg';
import ContainerDivisor from '../components/UXUI/ContainerDivisor';

const About = () => {
	return (
		<div id="about" className="w-full px-[40px] py-[40px] min-h-screen flex flex-col ">
			<div className="w-full h-full flex flex-col text-white font-erode font-10 ">
				<div className=" w-full h-[20vh] flex items-center">
					<h2 className="text-[56px] underline decoration-[15px] decoration-white/10 text-zinc-500 font-10">Who am I?</h2>
				</div>
				<div className="relative w-full">
					<div className="flex w-[70%] flex-col space-y-[20px]">
						<div className="text-[16px] md:text-[25px] lg:text-[22px] space-y-2">
							<p className=" leading-[30px]">My name is Zadiel Salas. I am 21 years old, and I am a self-taught front-end web developer.</p>

							<p className=" leading-[30px]">
								I have always loved the digital world, and since I was little, I have been very creative, dedicating myself to drawing, photography,
								and enjoying nature and travel. I found the perfect field to combine all these skills that I enjoy.
							</p>

							<p className=" leading-[30px]">
								My vision is to provide companies with modern web solutions that visually appeal to users. I believe in combining clean design and
								solid functionality to create seamless experiences.
							</p>

							<p className=" leading-[30px]">
								<a href="#work" className=" decoration-solid decoration underline text-zinc-500 transition duration-300 font-Erode">
									I am passionate about turning ideas into reality, one line of code at a time.
								</a>
							</p>

							<p className=" leading-[30px]">
								Throughout my journey as a front-end developer, I have dedicated a significant amount of time to mastering the fundamental principles
								of CSS. I have worked on improving my ability to create responsive, visually appealing, and well-structured designs that enhance user
								experience.
							</p>

							<p className=" leading-[30px]">
								Similarly, I have invested considerable effort in learning and refining my skills in React. I am continuously exploring best
								practices, optimizing performance, and structuring components effectively to build{' '}
								<a href="#work" className=" decoration-solid decoration underline text-zinc-500 transition duration-300 font-Erode">
									scalable and maintainable applications.
								</a>
							</p>

							<p className=" leading-[30px]">
								My goal is to keep growing as a developer, staying up to date with{' '}
								<a href="#service" className=" decoration-solid decoration underline text-zinc-500 transition duration-300 font-Erode">
									the latest technologies
								</a>{' '}
								, and delivering high-quality solutions that meet both aesthetic and functional demands.
							</p>
						</div>
					</div>
					<div className="absolute group min-w-[150px] w-auto transition duration-300 z-40 transform right-[150px] -bottom-[113px] flex flex-col items-center justify-center">
						<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
						<div className="w-[1px] h-[360px] bg-white/10 transition-all duration-300"></div>
						<div className="w-[5px] h-[5px] bg-white rounded-full"></div>
					</div>
				</div>

				<div className="py-[40px] flex justify-end items-center min-h-[110vh]">
					<ContainerDivisor className="flex justify-end py-[50px]">
						<img className="w-[70%] h-[50%]" src={img} alt="" />
					</ContainerDivisor>
				</div>
			</div>
		</div>
	);
};

export default About;
