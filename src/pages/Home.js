import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/iowa-state-universitybanner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Noah Ross </h1>
        <p> COMPUTER ENGINEER</p>
        <Link to="/contact">
          <button> REACH OUT </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
