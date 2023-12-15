/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Social = ({ image, link, active }) => {
  return (
    <div
      id="Contact"
      className={`item social  ${
        !(active === "All" || active === "Contact") && "hide"
      }`}
    >
      <a
        href={link && link.includes("gmail") ? `mailto:${link}` : link}
        target="_blank"
        rel="noreferrer"
      >
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
