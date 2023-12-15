/* eslint-disable react/prop-types */
import { useState } from "react";
import MaterialUISwitch from "./Swith";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = ({ items, active, setActive, checked, handleChange }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <p>
          Dan_<span>stack</span>
        </p>
      </div>

      <div className="nav mobile-nav">
        <div className="mobile-div">
          <p>
            Dan_<span>stack</span>
          </p>
          {showNav ? (
            <IoCloseOutline
              className="nav-menu"
              onClick={() => {
                setShowNav(!showNav);
              }}
            />
          ) : (
            <CiMenuFries
              className="nav-menu"
              onClick={() => {
                setShowNav(!showNav);
              }}
            />
          )}
        </div>
        <div className={`nav-items-box ${showNav && "show-nav"}`}>
          {items.map((item) => {
            return (
              <a
                href={`#${item}`}
                key={item}
                className={`nav-items ${active === item && "active-item"}`}
                onClick={() => {
                  setActive(item);
                  setShowNav(false);
                  // console.log(active);
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
      <div className="swith">
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={checked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NavBar;
