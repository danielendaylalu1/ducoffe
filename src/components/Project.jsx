/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";

const Project = ({ checked, name, image, links, icons, active }) => {
  return (
    <div
      className={`item item-tall box-column project ${
        checked ? "dark" : "light-snd"
      } ${!(active === "All" || active === "Projects") && "hide"}`}
    >
      <h3>Project</h3>
      <h1>{name}</h1>

      <div className="project-skills">
        <h3>Built with</h3>
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

      <img src={image} />

      <div className="project-more">
        <div className="project-links">
          {links.map((link) => {
            return (
              <div className="project-link" key={link.name}>
                <a href={link.link}>
                  <IconContext.Provider
                    value={{ color: link.color, className: "icon-sm" }}
                  >
                    {link.icon}
                  </IconContext.Provider>
                </a>
              </div>
            );
          })}
        </div>
        <div className={`project-about `}>
          <p className={`btn dark2`}>About Project</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
