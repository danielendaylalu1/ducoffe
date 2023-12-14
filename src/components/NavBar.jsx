/* eslint-disable react/prop-types */
import MaterialUISwitch from "./Swith";
const NavBar = ({ items, active, setActive, checked, handleChange }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>
          Dan_<span>stack</span>
        </p>
      </div>
      <div className="nav">
        {items.map((item) => {
          return (
            <a
              href={`#${item}`}
              key={item}
              className={`nav-items ${active === item && "active-item"}`}
              onClick={() => {
                setActive(item);
                console.log(active);
              }}
            >
              {item}
            </a>
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
  );
};

export default NavBar;
