import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Member.css';

const Member = (props) => {
	const { name, gender, country, netWorth, sorceOfWealth, img } = props.member;
	const iFaUser = <FontAwesomeIcon icon={faUser} />;
	return (
		<div className="col-md-4">
			<div className="card mb-4">
				<img src={img} className="card-img-top" alt="!" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{gender}</li>
					<li className="list-group-item">{country}</li>
					<li className="list-group-item">{netWorth}</li>
					<li className="list-group-item">{sorceOfWealth}</li>
					<li className="list-group-item">
						<button className="btn w-100 btn-dark" onClick={() => props.handleMember(props.member)}>
							{iFaUser} Add This person
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Member;
