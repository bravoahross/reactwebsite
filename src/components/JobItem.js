import React from "react";
import { Link } from "react-router-dom";



function JobItem({ image, name, position, link, skills, textColor, backColor }) {
  const buttonStyle = {
    backgroundColor: backColor, 
    color: textColor, 
  };
  return (
    <div className="jobItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> <strong> Position: </strong> {position} </p>
      <p> <strong> Skills used: </strong> {skills} </p>
      <Link to= {link}>
          <button style={buttonStyle}> <strong> LEARN MORE </strong> </button>
      </Link>
    </div>
  );
}

export default JobItem;
