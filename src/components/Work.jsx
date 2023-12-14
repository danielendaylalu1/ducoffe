/* eslint-disable react/prop-types */
// import React from "react";
import { IconContext } from "react-icons";

const Work = ({ active, checked, name, icons, desc }) => {
  return (
    <div
      className={`item item-wide box-column project ${
        checked ? "dark" : "light-frt"
      } ${!(active === "All") && "hide"}`}
    >
      <h3>Work Experience</h3>
      <h2>{name}</h2>

      <div className="project-skills">
        <h3>Technologies</h3>
        <div className="project-skills-icons">
          {icons.map((icon, index) => {
            return (
              <IconContext.Provider
                key={index}
                value={{ color: icon.color, className: "icon-xl" }}
              >
                {icon.name}
              </IconContext.Provider>
            );
          })}
        </div>
      </div>
      <div className="project-more">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Work;
