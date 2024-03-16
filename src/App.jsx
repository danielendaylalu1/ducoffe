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
import MusicExplore from "../src/assets/images/music-explore.png";

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
  const [checked, setChecked] = useState(true);
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
          <Social
            checked={checked}
            image={github}
            active={active}
            link="https://github.com/danielendaylalu1/"
          />
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

          <Social
            checked={checked}
            image={linkedin}
            active={active}
            link="https://www.linkedin.com/in/daniel-endaylalu-43b92326a/"
          />
          <Project
            icons={[
              { name: <FaHtml5 />, color: "#e67c19" },
              { name: <FaCss3Alt />, color: "#2d6fe1" },

              { name: <FaReact />, color: "#36d3f2" },
              { name: <SiRedux />, color: "#a30696" },
              { name: <FaNodeJs />, color: "#36d3f2" },
              { name: <SiExpress />, color: "#a30696" },
              { name: <SiMongodb />, color: "#a30696" },
            ]}
            checked={checked}
            active={active}
            name="Music Explore"
            image={MusicExplore}
            links={[
              {
                icon: <FaGithub />,
                color: "#000",
                link: "https://github.com/danielendaylalu1/MusicExplore",
              },
              {
                icon: <CiLink />,
                color: "#0219e0",
                link: "https://music-explore-eight.vercel.app/",
              },
            ]}
          />

          <Social
            checked={checked}
            image={telegram}
            active={active}
            link="https://t.me/Daylalu"
          />

          <Social
            checked={checked}
            image={gmail}
            active={active}
            link="endaylaludaniel@gmail.com"
          />
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
            ]}
            checked={checked}
            active={active}
            name="SYNC INTERN'S"
            desc="It's my pleasure to provide this letter of recommendation to Mr./Miss Daniel Endaylalu who has
            successfully completed one month internship (from 15th July 2023 to 15th August 2023) in the
            ﬁeld of React Js with us. During this period,
            We found them as a hard-working and a punctual person as they completed all the assigned tasks
            well and on time. Their obedience and perseverance are commendable, we were privileged to
            have them as our teammate. They have been an asset to the company. Their conduct and
            performance on the job have been excellent.
            In a nutshell, I'd like to reiterate strong support to them for being a sincere and diligent
            participant. I would highly recommend Mr./Miss Daniel Endaylalu for prospective opportunities."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
