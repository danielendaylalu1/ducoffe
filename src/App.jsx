import { useState } from "react";
import "./App.css";
import MaterialUISwitch from "./components/Swith";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
            className={`item item-wide item-tall about ${
              checked ? "dark" : "light"
            }`}
          >
            <h1>Daniel Endaylalu</h1>
            <h3>Dedicated and Passionate Full-stack Web Developer.</h3>
            <p>
              As a Full-stack Developer, I possess skills in HTML, Css,
              JavaScript, React, Redux, Tailwind, Node.js, Express, Mongodb and
              Sql. I excel in developing, and maintaining responsive websites
              and web applications that offer a seamless user experience. My
              expertise lies in crafting dynamic, engaging interfaces through
              writing clean, optimized code and utilizing cutting-edge
              full-stack development tools and techniques.
              {show && (
                <p>
                  I am proficient in both front-end and back-end development,
                  including database management and server-side programming. I
                  am also a team player who thrives in collaborating with
                  cross-functional teams to produce outstanding web
                  applications. both front-end and back-end development,
                  including database management and server-side programming. I
                  am also a team player who thrives in collaborating with
                  cross-functional teams to produce outstanding web
                  applications.
                </p>
              )}
              <span className="about-more" onClick={() => setShow(!show)}>
                {show ? "Hide" : "More"}
              </span>
            </p>
          </div>
          <div className="item">2</div>
          <div className="item item-tall">3</div>
          <div className="item item-tall">4</div>
          <div className="item item-wide">5</div>
          <div className="item">6</div>
          <div className="item item-wide">7</div>
          <div className="item item-wide">8</div>
          <div className="item item-tall">9</div>
          <div className="item item-tall">10</div>
          <div className="item">11</div>
          <div className="item">12</div>
          <div className="item">13</div>
          <div className="item item-wide">14</div>
          <div className="item">15</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
