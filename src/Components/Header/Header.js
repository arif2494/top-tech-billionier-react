import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className="container text-center mb-5 header-bg">
			<h1 className="fw-bold pt-3 shadow-text">The Top Tech Billioniers Club</h1>
			<p className="text-start fs-5">
				<abbr className="first-letter">S</abbr>tock markets have rebounded in a big way since the Covid crash
				that began in February 2020, helping boost the fortunes of the world’s billionaires to record highs. But
				no group of the ultrarich has benefited like tech billionaires—who are worth a combined $2.5 trillion on
				Forbes’ 2021 World’s Billionaires list, up about 80% from $1.4 trillion a year ago.{' '}
			</p>
			<h3 className="fw-bold">
				Club members net worth :<em className="fw-bolder text-color"> $678.6</em> Billion Dollar
			</h3>
		</div>
	);
};

export default Header;
