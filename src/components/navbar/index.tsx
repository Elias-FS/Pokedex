import "./NavBar.css";
import { MenuItems } from "./MenuItens";
import { useState } from "react";

const NavBar = () => {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const click = () => {};

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Pokédex
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon} />
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
