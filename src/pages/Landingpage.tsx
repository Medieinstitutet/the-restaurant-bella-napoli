import { NavLink } from "react-router-dom";
//import { FoodMenu } from "../components/FoodMenu";
import "../styles/_Landingpage.scss";
import Footer from "../components/footer";

export const Landingpage = () => {
  return (
    <div className="landingpage-background">
      <header>
        <ul>
          <li>
            <NavLink to={"/bookingForm"}>Boka bord</NavLink>
          </li>
          <li>
            <a href="#menu-container">Meny</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </header>
      <div className="welcome-container">
        <h1>Välkommen till Bella Napoli!</h1>
      </div>
      <div id="menu-container">
        <div className="menutext-container">
          <h2>Meny</h2>
          <p>Risotto</p>
          <p>Carbonarara</p>
          <p>Sallad</p>
          <p>Bolognese</p>
          <p>Margherita</p>
          <p>Pesto alla Genovese</p>
        </div>
        {/* <FoodMenu /> */}
      </div>
      <div id="contact-container">
        <Footer />
      </div>
      <div id="kontakt"></div>
    </div>
  );
};
