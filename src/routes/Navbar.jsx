import React, { useState } from 'react';
import ContainerWithDividers from '../components/UXUI/ContainerWithDividers';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Lista de enlaces para el menú
	const navLinks = [
		{ id: '001', href: '#home', label: 'Go Home' },
		{ id: '002', href: '#about', label: 'Who am I?' },
		{ id: '003', href: '#service', label: 'What are my services?' },
		{ id: '004', href: '#work', label: 'I show you my work' },
		{ id: '005', href: '#contact', label: 'Contact Me' },
	];

	// Función para cerrar el sidebar con un delay
	const handleLinkClick = () => {
		setTimeout(() => {
			setIsSidebarOpen(false);
		}, 300);
	};

	return (
		<div className="relative">
			{/* Botón de menú */}
			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="fixed absolute items-center -right-[296px] top-[370px] z-20 flex group flex-col cursor-pointer space-y-2"
			>
				{/* Espacio superior opcional */}

				{/* Líneas del botón */}
				<div className="transform rotate-90 flex items-center space-x-[10px]">
					<p className="trasform rotate-90 text-white space-y-[7px]">
						<div className="w-[25px] h-[1px] bg-white"></div>
						<div className="w-[25px] h-[1px] bg-white"></div>
						<div className="w-[100%] flex space-x-[5px]">
							<div className="w-[15px] h-[1px] bg-zinc-700"></div>
							<div className="w-[5px] h-[1px] bg-white"></div>
						</div>
					</p>
					<div className="w-[700px] h-[1px] bg-white/10"></div>
				</div>
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-full shadow-md transition-transform bg-zinc-950 transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full z-50'
				} z-50 transition-all duration-500 delay-100`}
			>
				<ContainerWithDividers>
					<div className="flex flex-col w-full h-screen gap-10 px-[20px] py-[10px] lg:gap-0">
						<div className="w-full h-screen lg:w-[100%]">
							<nav className="flex flex-col h-full w-full items-center">
								{/* Botón de cierre */}
								<div className="w-full h-[5%] flex items-center justify-end">
									<button onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center justify-center text-[30px] cursor-pointer">
										<div className="w-[50px] h-[50px] relative flex items-center justify-center">
											<div className="absolute w-[50px] h-[1px] bg-white rotate-45"></div>
											<div className="absolute w-[50px] h-[1px] bg-white -rotate-45"></div>
										</div>
									</button>
								</div>

								{/* Generar enlaces con map */}
								<div className="grid grid-cols-3 grid-rows-2 items-center w-[70%] h-[80vh]">
									{navLinks.map((link) => (
										<a
											key={link.id}
											href={link.href}
											onClick={handleLinkClick}
											className="flex items-center min-w-[200px] h-[30%] space-x-[10px] group cursor-pointer underline group-hover:decoration-[1px] group-hover:decoration-white/10"
										>
											<div className="flex items-center space-x-[10px] text-white transition duration-300">
												<p className="font-10 text-[20px]">{link.id}</p>
											</div>

											<div className="w-[30px] h-[1px] bg-white"></div>

											<p className="text-white group-hover:text-white  font-10 text-[35px] md:text-[60px] lg:text-[20px] transition-colors duration-300">
												{link.label}
											</p>
										</a>
									))}
								</div>
							</nav>
						</div>
					</div>
				</ContainerWithDividers>
			</div>

			{/* Overlay */}
			{isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
		</div>
	);
};

export default Navbar;
