import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price, link }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Position: {price} </p>
      <Link to= {link}>
          <button> LEARN MORE </button>
      </Link>
    </div>
  );
}

export default MenuItem;
