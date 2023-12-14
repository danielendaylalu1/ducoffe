import { useState } from "react";
import "./App.css";
import MaterialUISwitch from "./components/Swith";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// import { IconContext } from "react-icons";
import { SiMongodb, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import SkillItem from "./components/SkillItem";

//images
import telegram from "../src/assets/images/telegram.jpg";
import linkedin from "../src/assets/images/linkedin.jpg";
import gmail from "../src/assets/images/gmail.jpg";
import github from "../src/assets/images/github.jpg";
import Social from "./components/Social";

function App() {
  const items = ["All", "About", "Projects", "Contact"];
  const [active, setActive] = useState("All");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    console.log(checked);
    setChecked(event.target.checked);
    console.log(checked);
  };

  const darkTheme = createTheme({
    palette: {
      mode: checked ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <div className="navbar">
          <div className="logo">
            <p>
              Dan_<span>stack</span>
            </p>
          </div>
          <div className="nav">
            {items.map((item) => {
              return (
                <p
                  key={item}
                  className={`nav-items ${active === item && "active-item"}`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </p>
              );
            })}
          </div>
          <div className="swith">
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={checked}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="header">
          <h1>
            <span>Full-Stack</span> Web Developer
          </h1>
        </div>
        <div className="container">
          <div
            className={`item item-wide item-tall about box-column ${
              checked ? "dark" : "light"
            }`}
          >
            <h1>Daniel Endaylalu</h1>
            <h3>Dedicated and Passionate Full-stack Web Developer.</h3>
            <h4>
              As a Full-stack Developer, I possess skills in{" "}
              <span className="underline">Javascript</span>, HTML, Css,{" "}
              <span className="underline">React</span>, Redux,{" "}
              <span className="underline">Node.js</span>, Tailwind, ,
              <span className="underline">Express.js</span>, Sql and{" "}
              <span className="underline">MongoDB</span>. I excel in developing,
              and maintaining responsive websites and web applications that
              offer a seamless user experience.
              {show && (
                <p className="bottom-p">
                  My expertise lies in crafting dynamic, engaging interfaces
                  through writing clean, optimized code and utilizing
                  cutting-edge{" "}
                  <span className="underline">full-stack development</span>{" "}
                  tools and techniques. I am proficient in both{" "}
                  <span className="underline">front-end</span> and{" "}
                  <span className="underline">back-end</span> development,
                  including database management and server-side programming. I
                  am also a team player who thrives in collaborating with
                  cross-functional teams to produce outstanding web
                  applications.
                </p>
              )}
              <span className="about-more" onClick={() => setShow(!show)}>
                {show ? "Hide" : "More"}
              </span>
            </h4>
          </div>
          <Social checked={checked} image={github} />
          <div
            className={`item item-tall skills box-column ${
              checked ? "dark" : "light"
            }`}
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
          <div
            className={`item item-tall box-column ${
              checked ? "dark" : "light"
            }`}
          >
            <h3>Project</h3>
            <h1>Weshare</h1>
            <div className="project-skills">
              <p>Built with</p>
            </div>
            <img src="" />
            <div className="project-more">
              <div className="project-links"></div>
              <div className="project-about"></div>
            </div>
          </div>
          <div className={`item item-wide ${checked ? "dark" : "light"}`}>
            5
          </div>
          <Social checked={checked} image={linkedin} />
          <div className={`item item-tall ${checked ? "dark" : "light"}`}>
            9
          </div>
          <Social checked={checked} image={telegram} />
          <Social checked={checked} image={gmail} />
          <div className={`item item-tall ${checked ? "dark" : "light"}`}>
            12
          </div>
          <div className={`item item-wide ${checked ? "dark" : "light"}`}>
            13
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
