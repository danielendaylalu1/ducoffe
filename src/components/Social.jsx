/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Social = ({ checked, image, link }) => {
  return (
    <div className={`item social ${checked ? "dark" : "light"}`}>
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
