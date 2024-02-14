import { useState } from "react";
import { BookingPresentation } from "../components/BookingPresentation";
import { IBookingAdmin } from "../models/IBookingAdmin";
import "../styles/Admin/Admin.scss";
import { getBookings } from "../services/getBooking";
import { Booking } from "../models/Booking";
import { IBooking } from "../models/IBooking";

const restId: string = import.meta.env.VITE_REST_ID;

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingAdmin[]>();
  const [inputValue, setInputValue] = useState<IBooking>();

  // restaurantId: "",
  // date: ,
  // time: 0,
  // numberOfGuests: 0,
  // customer: { name: "", lastname: "", email: "string", phone: "string" },

  const getData = async () => {
    const response = await getBookings();
    setBookings(response.data);
  };

  if (!bookings) {
    getData();
  }

  return (
    <section className="admin-page">
      <section className="admin-section">
        <h2>Admin panel</h2>
        <form>
          <label>
            Date: <input type="date" value={inputValue?.date} />
          </label>
          <label>
            Time:
            <select>
              <option value="18:00"></option>
              <option value="21:00"></option>
            </select>
          </label>
          <label>
            Name: <input type="text" />
          </label>
          <label>
            Lastname:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="text" />
          </label>
          <label>
            Phone:
            <input type="text" />
          </label>
          <button>Add booking</button>
        </form>
        {bookings?.map((booking) => {
          return (
            <BookingPresentation
              key={booking._id}
              booking={booking}
              setBookings={setBookings}
            />
          );
        })}
      </section>
    </section>
  );
};
