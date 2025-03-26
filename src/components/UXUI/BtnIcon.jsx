import React from 'react';
import Divisor from './Divisor';

const BtnIcon = ({ title, w = 'w-[90px]' }) => {
	return (
		<div className="flex">
			<Divisor className={`${w} h-[25px] justify-center`} text={title} clas="font-bold text-[15px] text-white" />
		</div>
	);
};

export default BtnIcon;
