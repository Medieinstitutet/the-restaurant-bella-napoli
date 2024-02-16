import { NavLink, Outlet } from "react-router-dom";
import "../styles/_Bookingpage.scss";

export const Bookingpage = () => {
  return (
    <>
      <div className="bookingpage-container">
        <NavLink to={"/"} className="backtohomepage-link">
          Tillbaka till huvudsidan
        </NavLink>
        <nav>
          <NavLink to={"book-number-of-guests"}>Antal gäster</NavLink>
          <NavLink to={"book-on-date"}>Datum</NavLink>
          <NavLink to={"book-on-time"}>Tid</NavLink>
        </nav>
        
        <div className="form-container"> 
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
