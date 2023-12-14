/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Social = ({ checked, image, link, active }) => {
  return (
    <div
      className={`item social ${checked ? "dark" : "light"} ${
        !(active === "All" || active === "Contact") && "hide"
      }`}
    >
      <a href={link}>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          style={{ color: "#ffffff" }}
          className="icon"
        />
      </a>
      <img src={image} />
    </div>
  );
};

export default Social;
