import { useState } from "react";
import { BookingPresentation } from "../components/BookingPresentation";
import { IBookingAdmin } from "../models/IBookingAdmin";
import "../styles/Admin/Admin.scss";
import { getBookings } from "../services/getBooking";
import { IBooking } from "../models/IBooking";
import { postBooking } from "../services/postBooking";

const restId: string = import.meta.env.VITE_REST_ID;

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingAdmin[]>();
  const [newBooking, setNewBooking] = useState<IBooking>({
    restaurantId: restId,
    date: "2024-02-0",
    time: "18:00",
    numberOfGuests: 0,
    customer: { name: "", lastname: "", email: "", phone: "" },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newBooking.numberOfGuests < 1) {
      alert("Vänligen välj antal gäster");
      return;
    }
  
    const selectedDateTime = new Date(`${newBooking.date}T${newBooking.time}`);
  const currentDateTime = new Date();

  if (!newBooking.date || !newBooking.time) {
    alert("Vänligen välj både datum och tid.");
    return;
  } else if (selectedDateTime < currentDateTime) {
    alert("Vänligen välj ett datum och tid som är framåt i tiden.");
    return;
  }
  
    await postBooking(newBooking);
    setNewBooking({
      restaurantId: restId,
      date: "2024-02-02",
      time: "18:00",
      numberOfGuests: 0,
      customer: { name: "", lastname: "", email: "", phone: "" },
    });
    await getData();
  };
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNewBooking((prevBooking) => ({
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
          <h3>Add new booking</h3>
          <label>
            Date:
            <input
              type="date"
              value={newBooking.date}
              onChange={handleChange}
              name="date"
            />
          </label>
          <label>
            Number of guests
            <input
              type="number"
              name="numberOfGuests"
              onChange={handleChange}
              value={newBooking.numberOfGuests}
              min={0}
              max={6}
            />
          </label>
          <label>
            Time:
            <select value={newBooking.time} onChange={handleChange} name="time">
              <option>18:00</option>
              <option>21:00</option>
            </select>
          </label>
          <label>
            Name:
            <input
              type="text"
              value={newBooking.customer.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              value={newBooking.customer.lastname}
              onChange={handleChange}
              name="lastname"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={newBooking.customer.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={newBooking.customer.phone}
              onChange={handleChange}
              name="phone"
            />
          </label>
          <button>Add booking</button>
        </form>
        <section className="booking-container">
          {bookings?.map((booking) => {
            return (
              <BookingPresentation
                key={booking._id}
                booking={booking}
                setBookings={setBookings}
                setNewBooking={setNewBooking}
                newBooking={newBooking}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};
