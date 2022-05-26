import "./Footer.scss";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <h1 className="navbar--title">
        Ser<span className="secondary-color">Path</span>
      </h1>
      <div className="footer-items-wrapper">
        <ul className="footer-items">
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom-bar">
        <p className="copyright">© SerPath {date}</p>
        <a
          href="https://www.linkedin.com/in/michael-barr-646a0441/"
          className="footer-linkedin"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
