import Burger from "../Burger/Burger";
import MobileDropdown from "./ModileDropdown";
import "./Nav.scss";

import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="nav-container bg-color-main">
      <h2 className="txt-color-main padding-1 nav-title">SerPath</h2>
      <Burger
        open={open}
        onClick={handleClick}
        className="nav--burger-bar"
        color="bg-color-secondary"
      />
      <MobileDropdown
        visible={open}
        items={["Home", "About", "Portfolio", "Work"]}
      />
    </nav>
  );
}

export default Nav;
