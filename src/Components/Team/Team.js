import React, { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import TeamDetails from "../TeamDetails/TeamDetails";
import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("./pHeroData.JSON")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  
  const [teamInfo,setTeamInfo]=useState([])
        
  console.log(teamInfo);
  
  const handleAddMember =(member) =>{
       
      const newTeam=[...teamInfo,member];
      setTeamInfo(newTeam);
   } 


  return (
    <div className="team-container">
      <Container className="container__style">
        <Row xs={1} sm={1} md={2} lg={3}>
          
        {team.map((team) => (
            <TeamMember handleAddMember={handleAddMember} key={team.key} team={team} />
          ))}
      </Row>

      </Container>
      <div className="selected-container">
       <TeamDetails teamInfo={teamInfo} key={teamInfo.id} ></TeamDetails>
      </div>
    </div>
  );
};

export default Team;
