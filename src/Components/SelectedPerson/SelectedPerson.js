import React from 'react';

const SelectedPerson = (props) => {
	const { name, netWorth, sorceOfWealth, img } = props.person;
	return (
		<div className="d-flex">
			<img src={img} alt="!" />
			<h5>{name}</h5>
			<p>{netWorth}</p>
			<p>{sorceOfWealth}</p>
		</div>
	);
};

export default SelectedPerson;
