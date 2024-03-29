import "./Footer.css";
import { FaSquareGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { darkModeContext, iconStyleContext } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { darkMode } = useContext(darkModeContext);
  const { light, dark, height, width } = useContext(iconStyleContext);
  const style = { fill: darkMode ? dark : light, width: width, height: height };

  return (
    <footer>
      <div
        className={darkMode ? "footer__container dark" : "footer__container"}>
        <p className="footer__author">thomaserdmenger</p>
        <nav>
          <Link to="https://github.com/thomaserdmenger" target="_blank">
            <FaSquareGithub style={style} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/thomaserdmenger/"
            target="_blank">
            <FaLinkedin style={style} />
          </Link>
          <Link to="https://t.me/indev100" target="_blank">
            <FaTelegram style={style} />
          </Link>
          <a href="mailto:indev100@icloud.com" target="_blank">
            <MdEmail style={style} />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
