import { useState } from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// import { IconContext } from "react-icons";

import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
// FaCss3Alt, FaHtml5, FaJs,
import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

import { SiRedux } from "react-icons/si";

//images
import telegram from "../src/assets/images/telegram.jpg";
import linkedin from "../src/assets/images/linkedin.jpg";
import gmail from "../src/assets/images/gmail.jpg";
import github from "../src/assets/images/github.jpg";
import weshareImg from "../src/assets/images/weshareimg.png";
import shoeImg from "../src/assets/images/shoeImg.png";

//components
import Social from "./components/Social";
import Project from "./components/Project";
import Skill from "./components/Skill";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  const items = ["All", "About", "Skills", "Projects", "Contact"];
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
        <NavBar
          items={items}
          setActive={setActive}
          handleChange={handleChange}
          active={active}
          checked={checked}
        />
        <Header />
        <div className="container">
          <About
            setShow={setShow}
            show={show}
            checked={checked}
            active={active}
          />
          <Social checked={checked} image={github} active={active} />
          <Skill checked={checked} active={active} />
          <Project
            icons={[
              { name: <FaReact />, color: "#36d3f2" },
              { name: <SiRedux />, color: "#a30696" },
              { name: <FaNodeJs />, color: "#2bb110" },
              { name: <SiExpress />, color: "#000" },
              { name: <SiMongodb />, color: "#2bb110" },
            ]}
            checked={checked}
            active={active}
            name="Weshare"
            image={weshareImg}
            links={[
              {
                icon: <FaGithub />,
                color: "#000",
                link: "https://github.com/danielendaylalu1/weShare",
              },
              {
                icon: <CiLink />,
                color: "#0219e0",
                link: "https://weshare-0u15.onrender.com",
              },
            ]}
          />

          <div
            className={`item item-wide ${checked ? "dark" : "light-frt"} ${
              !(active === "All") && "hide"
            }`}
          >
            5
          </div>
          <Social checked={checked} image={linkedin} active={active} />
          <Project
            icons={[
              { name: <FaHtml5 />, color: "#e67c19" },
              { name: <FaCss3Alt />, color: "#2d6fe1" },

              { name: <FaReact />, color: "#36d3f2" },
              { name: <SiRedux />, color: "#a30696" },
            ]}
            checked={checked}
            active={active}
            name="chamaStore"
            image={shoeImg}
            links={[
              {
                icon: <FaGithub />,
                color: "#000",
                link: "https://github.com/danielendaylalu1/chamaStore",
              },
              {
                icon: <CiLink />,
                color: "#0219e0",
                link: "https://chamastore.onrender.com/",
              },
            ]}
          />

          <Social checked={checked} image={telegram} active={active} />
          <Social checked={checked} image={gmail} active={active} />
          <Project
            icons={[
              { name: <FaHtml5 />, color: "#e67c19" },
              { name: <FaCss3Alt />, color: "#2d6fe1" },

              { name: <FaReact />, color: "#36d3f2" },
              { name: <SiRedux />, color: "#a30696" },
            ]}
            checked={checked}
            active={active}
            name="chamaStore"
            image={shoeImg}
            links={[
              {
                icon: <FaGithub />,
                color: "#000",
                link: "https://github.com/danielendaylalu1/chamaStore",
              },
              {
                icon: <CiLink />,
                color: "#0219e0",
                link: "https://chamastore.onrender.com/",
              },
            ]}
          />

          <Work
            icons={[
              { name: <FaHtml5 />, color: "#e67c19" },
              { name: <FaCss3Alt />, color: "#2d6fe1" },

              { name: <FaReact />, color: "#36d3f2" },
              { name: <SiRedux />, color: "#a30696" },
            ]}
            checked={checked}
            active={active}
            name="EHPSA(Ethiopian Health Profession Student Association)"
            desc="I am proud to have contributed to EHPSA's mission during my internship, leveraging my skills including
            React and Redux, to design and implement robust user interfaces, ensuring a seamless and engaging
            user experience. Collaborated closely with cross-functional teams to integrate the front-end with the
            back-end systems, optimizing overall system performance. This experience has not only honed my
            technical abilities but has also instilled in me a commitment to delivering high-quality solutions within
            a collaborative team environment."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
