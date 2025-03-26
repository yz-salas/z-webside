import React from 'react';
import { Link } from 'react-router-dom';

const BtnLinks = ({ title, className, url }) => {
	return (
		<a href={url} className={className}>
			{title}
		</a>
	);
};

export default BtnLinks;
