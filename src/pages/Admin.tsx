import { useEffect, useState } from "react";
import { BookingPresentation } from "../components/BookingPresentation";
import { IBookingAdmin } from "../models/IBookingAdmin";
import "../styles/Admin/Admin.scss";
import { getBookings } from "../services/getBooking";

const restId: string = import.meta.env.VITE_REST_ID;

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingAdmin[]>();

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
