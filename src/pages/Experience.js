import React from "react";
import { JobList } from "../helpers/JobList";
import JobItem from "../components/JobItem";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="job">
      <h1 className="jobTitle"> Industry & Work Experience </h1>
      <div className="jobList">
        {JobList.map((jobItem, key) => {
          return (
            <JobItem
              key={key}
              image={jobItem.image}
              name={jobItem.name}
              position={jobItem.position}
              skills={jobItem.skills}
              link={jobItem.link}
              textColor={jobItem.textColor}
              backColor={jobItem.backColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
