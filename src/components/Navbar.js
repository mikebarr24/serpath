import "./Navbar.scss";

export default function Navbar() {
  const toggleMenu = () => {
    document.querySelector(".menu-items-wrapper").classList.toggle("open");
    document.querySelector(".menu-items").classList.toggle("open");
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar--title">
          Ser<span className="secondary-color">Path</span>
        </h1>
        <div className="menu-items-wrapper">
          <ul className="menu-items">
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="burger-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
