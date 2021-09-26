import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import TotalWorth from '../TotalWorth/TotalWorth';

const AllMembers = () => {
	const [ members, setMembers ] = useState([]);
	const [ selectedMember, setSelectedMember ] = useState([]);
	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setMembers(data));
	}, []);
	const handleMember = (member) => {
		let allSelectedMember = [ ...selectedMember, member ];
		setSelectedMember(allSelectedMember);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-9">
					<div className="row">
						{members.map((member) => (
							<Member member={member} handleMember={handleMember} key={member.id} />
						))}
					</div>
				</div>
				<div className="col-md-3">
					<h3>
						Total Person Added: <span className="text-color">{selectedMember.length}</span>
					</h3>
					<TotalWorth selectedMember={selectedMember} />
				</div>
			</div>
		</div>
	);
};

export default AllMembers;
