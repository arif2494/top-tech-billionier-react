import React from 'react';
import './SelectedPerson.css';
const SelectedPerson = (props) => {
	const { name, netWorth, img } = props.person;
	// make selected man
	return (
		<div className="d-flex align-items-center gap-3  selected-person">
			<img src={img} className="selected-img" alt="!" />
			<h5>{name}</h5>
			<h5>${netWorth}</h5>
		</div>
	);
};

export default SelectedPerson;
