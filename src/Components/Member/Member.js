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
				<div className="card-body bg-pink">
					<h5 className="card-title">{name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item bg-pink">
						Gender : <span className="fw-bold">{gender}</span>
					</li>
					<li className="list-group-item bg-pink">
						Country : <span className="fw-bold">{country}</span>
					</li>
					<li className="list-group-item bg-pink">
						Money : <span className="fw-bold">${netWorth}</span>
					</li>
					<li className="list-group-item bg-pink">
						Source of income : <span className="fw-bold">{sorceOfWealth}</span>
					</li>
					<li className="list-group-item">
						<button className="btn w-100 btn-dark bg-pink" onClick={() => props.handleMember(props.member)}>
							{iFaUser} Add This person
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Member;
