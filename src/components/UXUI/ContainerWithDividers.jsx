import React from 'react';
import Divisor from './Divisor';

const ContainerWithDividers = ({ children }) => {
	return (
		<div className="min-h-screen divide-y-[1px]  flex divide-x-[1px] divide-zinc-800/45">
			{/* Left Divider */}
			<Divisor className="min-w-[50px]" />

			{/* Main Content Area */}
			<div className="w-full h-full flex flex-col text-zinc-700 font-erode py-[40px]">{children}</div>

			{/* Right Divider */}
			<Divisor className="min-w-[50px]" />
		</div>
	);
};

export default ContainerWithDividers;
