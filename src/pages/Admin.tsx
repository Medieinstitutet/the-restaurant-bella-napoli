import { useState } from "react";
import { BookingPresentation } from "../components/BookingPresentation";
import { IBookingAdmin } from "../models/IBookingAdmin";
import "../styles/Admin/Admin.scss";
import { getBookings } from "../services/getBooking";
import { Booking } from "../models/Booking";
import { postBooking } from "../services/postBooking";
import { useEffect } from "react";

const restId: string = import.meta.env.VITE_REST_ID;

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingAdmin[]>();
  const [createBooking, setCreateBooking] = useState<Booking>({
    restaurantId: restId,
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: { name: "", lastname: "", email: "", phone: "" },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postBooking(createBooking);
    await getData();
    setCreateBooking({
      restaurantId: restId,
      date: "",
      time: "",
      numberOfGuests: 0,
      customer: { name: "", lastname: "", email: "", phone: "" },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setCreateBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
      customer: {
        ...prevBooking.customer,
        [name]: value,
      },
    }));
  };

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
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={createBooking.date}
              onChange={handleChange}
              name="date"
            />
          </label>
          <label>
            Time:
            <select
              value={createBooking.time}
              onChange={handleChange}
              name="time"
            >
              <option>18:00</option>
              <option>21:00</option>
            </select>
          </label>
          <label>
            Name:
            <input
              type="text"
              value={createBooking.customer.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              value={createBooking.customer.lastname}
              onChange={handleChange}
              name="lastname"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={createBooking.customer.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={createBooking.customer.phone}
              onChange={handleChange}
              name="phone"
            />
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
