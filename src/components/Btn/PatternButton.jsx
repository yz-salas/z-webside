import React from 'react';

const PatternButton = ({ text, className2, className }) => {
	return (
		<div className="group relative cursor-pointer inline-block">
			{/* Fondo desplazado con animación continua */}
			<div
				className={`${className2} animate-pattern transition-all duration-300 text-zinc-900 font-900 group-hover:[--pattern-fg:theme(colors.zinc.800)] absolute flex items-center justify-center font-erode inset-0 translate-x-2 translate-y-2
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-[size:12px_12px] bg-fixed group-hover:bg-[--pattern-fg:theme(colors.white)]/20 [--pattern-fg:theme(colors.white)]/10`}
			>
				{text}
			</div>

			{/* Botón principal */}
			<button
				className={`${className} relative font-erode border-[1px] border-zinc-700 group-hover:border-white bg-transparent group-hover:text-white text-[--pattern-fg:theme(colors.white)]/20 flex items-center justify-center px-4 py-2 font-bold transition-all hover:brightness-125`}
			>
				{text}
			</button>
		</div>
	);
};

export default PatternButton;
