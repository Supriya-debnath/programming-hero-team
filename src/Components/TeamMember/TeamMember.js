import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./TeamMember.css";

const TeamMember = (props) => {
  // console.log(props.team);

  // destructuring
  const { id, name, age, salary, img, profession,country} = props.team;

  return (
    <div>
      <Col>
        <Card
          className="shadow mb-4"
          style={{ borderRadius: "15px", border: 0 , backgroundColor: "#20B2AA"}}
        >
          <div
            className="d-flex align-items-center p-2"
            style={{ height: "300px" }}
          >
            <Card.Img
              className="w-100 pt-3"
              style={{ objectFit: "contain", maxHeight: "300px" }}
              src={img}
            />
          </div>
          <Card.Body>
          <Card.Title as={"h5"}>Name: {name}</Card.Title>
          <Card.Title as={"h5"}>Age: {age}</Card.Title>
          <Card.Title as={"h5"}>Profession: {profession}</Card.Title>
          <Card.Title as={"h5"}>Country: {country}</Card.Title>
          </Card.Body>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <Card.Title
              as={"h2"}
              style={{ fontWeight: "700", color: "#ff4b2b" }}
            >
              ${salary}
            </Card.Title>
            <Button     onClick={()=>{
                    props.handleAddMember(props.team)
                    
                }}  className="button__style shadow-none"><FontAwesomeIcon icon={faShoppingCart}/> <small> Add to Cart</small></Button>
            
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default TeamMember;
