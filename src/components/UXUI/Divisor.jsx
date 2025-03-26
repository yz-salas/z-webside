import React from 'react';

const Divisor = ({ className = 'min-w-[3%] h-full', text, clas }) => {
	return (
		<div
			className={`${className} relative font-erode overflow-visible border-[1px] border-zinc-700/45 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:theme(colors.zinc.950)]/5 dark:[--pattern-fg:theme(colors.white)]/10 flex items-center`}
		>
			<span className={`${clas}`}>{text}</span>
		</div>
	);
};

export default Divisor;
