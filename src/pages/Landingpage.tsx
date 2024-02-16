import { Link, NavLink } from "react-router-dom";
import "../styles/_Landingpage.scss";

export const Landingpage = () => {
  return (
    <div className="landingpage-background">
      <header>
      
        <ul>
        <li>
            <Link to={"/bookingForm"}>Boka bord Test</Link>
          </li>
          <li>
            <NavLink to={"booking/book-number-of-guests"}>Boka bord</NavLink>
          </li>
          <li>
            <a href="#menu-container">Meny</a>
          </li>
          <li>
            <a href="#contact-container">Kontakt</a>
          </li>
        </ul>
      </header>
      <div className="welcome-container">
        <h1>Välkommen till Bella Napoli!</h1>
      </div>
      <div id="menu-container">
        <div className="menutext-container">
          <h3>Menu</h3>
          <p>Risotto</p>
          <p>Carbonara</p>
          <p>Bolognese</p>
          <p>Margherita</p>
          <p>Pesto alla Genovese</p>
        </div>
      </div>
      <div id="contact-container">
        <div className="contacttext-container">
          <p>Öppettider: Måndag-Söndag 18-24</p>
          <p>Adress: Drottinggatan 50</p>
          <p>Telefon: +4637057042</p>
          <p>Email: BellaBella@mail.com</p>
        </div>
      </div>
    </div>
  );
};
