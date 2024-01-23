import React from "react";
import { JobList } from "../helpers/JobList";
import MenuItem from "../components/MenuItem";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Industry & Work Experience </h1>
      <div className="menuList">
        {JobList.map((jobItem, key) => {
          return (
            <MenuItem
              key={key}
              image={jobItem.image}
              name={jobItem.name}
              price={jobItem.price}
              link={jobItem.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
