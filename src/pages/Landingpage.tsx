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
            {/* <NavLink to={"booking"}>Boka bord</NavLink> */}
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
        <div className="contacttext-container">
          <p>Öppettider: Måndag-Söndag 18-24</p>
          <p>Adress: Drottinggatan 50</p>
          <p>Telefon: +4637057042</p>
          <p>Email: BellaBella@mail.com</p>
          {/* <NavLink className="menubook-link" to={"booking"}>
            Boka bord
          </NavLink> */}
        </div>
        <Footer /> {}
      </div>
      <div id="kontakt"></div>
    </div>
  );
};
