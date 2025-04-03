const ContainerDivisor = ({ className = 'min-w-[3%] h-full', children }) => {
	return (
		<div
			className={`${className} relative font-erode overflow-visible border-[1px] border-white/10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:theme(colors.white)]/10 dark:[--pattern-fg:theme(colors.white)]/10 flex items-center`}
		>
			{/* Esquinas */}
			<div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] bg-white rounded-full"></div>
			<div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] bg-white rounded-full"></div>
			<div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] bg-white rounded-full"></div>
			<div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] bg-white rounded-full"></div>

			{children}
		</div>
	);
};

export default ContainerDivisor;
