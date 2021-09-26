import React from 'react';
import './TeamDetails.css'

const TeamDetails = (props) => {
    const team = props.teamInfo;
    console.log(team);
            
    let total =0;
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        total=total+member.salary;
    }

    return (
        <div className="teamStyle">
            <h4>Programmer's World</h4>
            <h5>Numbers of Team Member: {team.length} </h5>
            <ul className="selectedMember">
            {props.teamInfo.map(member=><ol>Name: {member.name}, Salary: ${member.salary} </ol>)}
            </ul>
            <h5>Total Salary : ${total}</h5>
        </div>
    );
};

export default TeamDetails;