import { NavLink } from "react-router-dom";
//import { FoodMenu } from "../components/FoodMenu";
import "../styles/_Landingpage.scss";
import Footer from "../components/footer";
import { useState } from "react";

export const Landingpage = () => {
  const [activeSection, setActiveSection] = useState<"menu" | "footer" | "">(
    ""
  );

  const toggleAnimation = (section: "menu" | "footer") => {
    setActiveSection(section);
    setTimeout(() => setActiveSection(""), 1500);
  };

  return (
    <div className="landingpage-background">
      <header>
        <ul>
          <li>
            <NavLink to={"/bookingForm"}>Boka bord</NavLink>
          </li>
          <li>
            <a href="#menu-container" onClick={() => toggleAnimation("menu")}>
              Meny
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={() => toggleAnimation("footer")}>
              Kontakt
            </a>
          </li>
        </ul>
      </header>
      <div className="welcome-container">
        <h1>Välkommen till Bella Napoli!</h1>
      </div>
      <div
        id="menu-container"
        className={activeSection === "menu" ? "animation-active" : ""}
      >
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
      <div
        id="contact-container"
        className={activeSection === "footer" ? "animation-active" : ""}
      >
        <Footer />
      </div>
      {/* <div id="kontakt"></div> */}
    </div>
  );
};