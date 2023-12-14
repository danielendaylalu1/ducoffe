/* eslint-disable react/prop-types */
import { SiMongodb, SiExpress } from "react-icons/si";

import { SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import SkillItem from "./SkillItem";
const Skill = ({ checked, active }) => {
  return (
    <div
      id="Skills"
      className={`item item-tall skills box-column ${
        checked ? "dark" : "light-trd "
      } ${!(active === "All" || active === "Skills") && "hide"}`}
    >
      <h1>Skills</h1>
      <SkillItem
        icons={[
          { name: <FaHtml5 />, color: "#e67c19" },
          { name: <FaCss3Alt />, color: "#2d6fe1" },
        ]}
        desc="Build Responsive and Attractive Websites."
      />
      <SkillItem
        icons={[
          { name: <FaJs />, color: "#dfd007" },
          { name: <FaReact />, color: "#36d3f2" },
          { name: <SiRedux />, color: "#a30696" },
        ]}
        desc="Build Dynamic and interactive Websites."
      />
      <SkillItem
        icons={[
          { name: <FaNodeJs />, color: "#2bb110" },
          { name: <SiExpress />, color: "#000" },
        ]}
        desc="Build REST-API and Server-side programs."
      />
      <SkillItem
        icons={[
          { name: <SiMongodb />, color: "#2bb110" },
          { name: <BiLogoPostgresql />, color: "#0e6fee" },
        ]}
        desc="Relational and Non-relational Database management."
      />
    </div>
  );
};

export default Skill;
