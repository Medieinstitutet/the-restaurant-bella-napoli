import { Link } from "react-router-dom";
import FoodMenu from "../components/foodmenu";
import "../styles/_Landingpage.scss";
import Footer from "../components/footer";
import { useState } from "react";

export const Landingpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="landingpage-background">
      <div
        className={`hamburger-menu ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <header>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            {}
            <Link to={"/bookingForm"} onClick={toggleMenu}>
              Boka bord Test
            </Link>
          </li>
          <li>
            <a href="#menu-container" onClick={toggleMenu}>
              Meny
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={toggleMenu}>
              Kontakt
            </a>
          </li>
        </ul>
      </header>
      <div className="welcome-container">
        <h1>Välkommen till Bella Napoli!</h1>
      </div>
      <div id="menu-container">
        <div className="menutext-container">
          <FoodMenu /> {}
        </div>
      </div>
      <div id="contact-container">
      
        <Footer /> {}
      </div>
      <div id="kontakt"></div>
    </div>
  );
};
