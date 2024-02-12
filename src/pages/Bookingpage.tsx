import { NavLink } from "react-router-dom";
import "../styles/_Bookingpage.scss";

export const Bookingpage = () => {
  return (
    <>
      <nav>
        <NavLink to={"book-number-of-guests"}>Antal gäster</NavLink>
        <NavLink to={"book-on-date"}>Datum</NavLink>
        <NavLink to={"book-on-time"}>Tid</NavLink>
      </nav>
    </>
  );
};
