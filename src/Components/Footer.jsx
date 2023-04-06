import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.style.css";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box footer-box1">
        <span>2023 © </span>
        <ExternalLink
          className="external-links"
          href="https://www.codewars.com/users/Stonemountain"
        >
          <span>Stone Mountain</span>
        </ExternalLink>
      </div>
      <div className="footer-box footer-box2">
        <ul className="footer-menus">
          <li>
            <ExternalLink
              className="external-links external-list-item support"
              href="https://www.codewars.com/users/Stonemountain"
            >
              Support
            </ExternalLink>
          </li>

          <li>
            <ExternalLink
              className="external-links external-list-item contact"
              href="https://www.codewars.com/users/Stonemountain"
            >
              Contact Us
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              className="external-links external-list-item disclaimer"
              href="https://www.codewars.com/users/Stonemountain"
            >
              Disclaimer
            </ExternalLink>
          </li>
        </ul>
      </div>

      <div className="social">
            <ExternalLink
          className="social-externals"
          href="https://github.com/benstonemountain"
        >
         
          <FontAwesomeIcon icon={faGithub} />
        </ExternalLink>
        <ExternalLink className="social-externals" href="#">
         <FontAwesomeIcon icon={faYoutube} />
        </ExternalLink>
        <ExternalLink className="social-externals" href="#">
          
          <FontAwesomeIcon icon={faFacebook} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Footer;
