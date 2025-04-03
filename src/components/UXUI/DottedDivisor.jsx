import React from 'react';

const DottedDivisor = ({ className = 'relative min-w-[3%] border-[1px] border-green-800/20 h-full', text, clas }) => {
	return (
		<div
			className={`${className} font-erode overflow-visible bg-[radial-gradient(circle,var(--pattern-fg)_1px,transparent_1.5px)] bg-[size:6px_6px] bg-fixed [--pattern-fg:theme(colors.white)] dark:[--pattern-fg:theme(colors.white)]/10 flex items-center`}
		>
			<span className={`${clas}`}>{text}</span>
		</div>
	);
};

export default DottedDivisor;
