import { Link } from "react-router-dom";
import "../styles/_Landingpage.scss";

export const Landingpage = () => {
  return (
    <div className="landingpage-background">
      <div className="landingpage-content-container">
        <h1>Bella Napoli</h1>
             <Link to="/contact">
              <button>Contact</button>
              </Link>
      </div>
 
    </div>
  );
};
