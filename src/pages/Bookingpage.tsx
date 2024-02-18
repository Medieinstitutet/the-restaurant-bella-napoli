import { NavLink } from "react-router-dom";
import "../styles/_Bookingpage.scss";
import { ChoseNumberOfPersons } from "../components/ChoseNumberOfPersons";
import { ChoseDate } from "../components/ChoseDate";
import { ChoseTime } from "../components/ChoseTime";

export const Bookingpage: React.FC = () => {
  return (
    <>
      <div className="bookingpage-container">
        <NavLink to={"/"} className="backtohomepage-link">
          Tillbaka till huvudsidan
        </NavLink>
        <div className="table-booking-form">
          <ChoseNumberOfPersons />
          <ChoseDate />
          <ChoseTime />
        </div>
        <button className="booktable-button">Boka bord</button>
      </div>
    </>
  );
};
