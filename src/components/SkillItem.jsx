/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContext } from "react-icons";

const SkillItem = ({ icons, desc }) => {
  return (
    <div className="skill-item">
      <div className="skill-icons">
        {icons.map((icon, index) => {
          return (
            // <FontAwesomeIcon
            //   key={index}
            //   icon={icon.name}
            //   size="2xl"
            //   style={{ color: icon.color }}
            // />
            <IconContext.Provider
              key={index}
              value={{ color: icon.color, className: "icon-2xl" }}
            >
              {icon.name}
            </IconContext.Provider>
          );
        })}
      </div>
      <div className="skill-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SkillItem;
