import { useEffect, useState } from "react";
import { BookingPresentation } from "../components/BookingPresentation";
import { IBookingAdmin } from "../models/IBookingAdmin";
import axios from "axios";
import "../styles/Admin/Admin.scss";

const restId = import.meta.env.VITE_REST_ID;

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingAdmin[]>();

  useEffect(() => {
    const getBookings = async () => {
      const response = await axios.get<IBookingAdmin[]>(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/" +
          restId
      );

      if (shouldUpdate) {
        setBookings(response.data);
      }
    };

    let shouldUpdate = true;

    if (!bookings) {
      getBookings();
    }

    return () => {
      shouldUpdate = false;
    };
  });

  const deleteBooking = async () => {
    const response = await axios.delete(
      "https://school-restaurant-api.azurewebsites.net/booking/delete/65c8d957cbb6491fd64e9a95"
    );
    console.log(response.data);
  };

  return (
    <section className="admin-section">
      {bookings?.map((booking) => {
        return <BookingPresentation key={booking._id} booking={booking} />;
      })}
    </section>
  );
};
