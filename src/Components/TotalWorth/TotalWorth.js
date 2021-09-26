import React from 'react';
import SelectedPerson from '../SelectedPerson/SelectedPerson';
import './TotalWorth.css';
const TotalWorth = (props) => {
	let persons = props.selectedMember;
	let total = 0;
	for (let person of persons) {
		total += person.netWorth;
	}
	return (
		<div>
			<h6>Total worth of selected members: {total}</h6>

			{persons.map((person) => <SelectedPerson key={person.id} person={person} />)}
		</div>
	);
};

export default TotalWorth;
