import React from 'react';
import SelectedPerson from '../SelectedPerson/SelectedPerson';
import './TotalWorth.css';
const TotalWorth = (props) => {
	// Calculate the total
	let persons = props.selectedMember;
	let total = 0;
	for (let person of persons) {
		total += person.netWorth;
	}
	return (
		<div>
			<h6>
				Total worth of selected members: <span className="text-color fw-bolder fs-4">${total}</span>
			</h6>
			{/* Display man from selected */}
			{persons.map((person) => <SelectedPerson key={person.id} person={person} />)}
		</div>
	);
};

export default TotalWorth;
