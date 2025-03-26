import React from 'react';

const TextOutline = ({ text = 'Texto de Prueba', className = '' }) => {
	return (
		<div className={`relative inline-block text-4xl font-bold ${className}`}>
			{/* Contorno del texto */}
			<span
				className="absolute inset-0 -z-10 text-zinc-800 stroke-current stroke-[1.5px]"
				style={{ WebkitTextStroke: '1px rgba(39, 39, 42, 0.45)', color: 'transparent' }}
			>
				{text}
			</span>
			{/* Relleno con efecto adaptado a la forma del texto */}
			<span
				className="bg-clip-text text-transparent bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
                   bg-[size:10px_10px] bg-fixed
                   [--pattern-fg:theme(colors.zinc.950)]/5 
                   dark:[--pattern-fg:theme(colors.white)]/10"
				style={{ display: 'inline-block' }}
			>
				{text}
			</span>
		</div>
	);
};

export default TextOutline;
