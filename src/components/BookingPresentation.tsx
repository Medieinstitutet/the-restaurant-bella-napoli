import { IBookingAdmin } from "../models/IBookingAdmin";
import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { updateBooking } from "../services/updateBooking";
import { getBookings } from "../services/getBooking";
import { IBooking } from "../models/IBooking";
import { IUpdateBooking } from "../models/IUpdateBooking";

const restId = import.meta.env.VITE_REST_ID;

interface IBookingPresentationProps {
  booking: IBookingAdmin;
  setBookings: Dispatch<SetStateAction<IBookingAdmin[] | undefined>>;
  setNewBooking: any;
  newBooking: any;
}

export const BookingPresentation = ({
  booking,
  setBookings,
  setNewBooking,
  newBooking,
}: IBookingPresentationProps) => {
  const [formState, setFormState] = useState(false);
  const [updatedBooking, setUpdatedBooking] = useState<IUpdateBooking>({
    id: "",
    restaurantId: restId,
    date: "",
    time: "18:00",
    numberOfGuests: 0,
    customerId: "",
  });

  const deleteBooking = async () => {
    await axios.delete(
      "https://school-restaurant-api.azurewebsites.net/booking/delete/" +
        booking._id
    );
    setBookings((Bookings) => Bookings?.filter((b) => b._id !== booking._id));
  };

  const toggleForm = () => {
    setFormState(!formState);
  };

  const submitEditedBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBooking(updatedBooking);
    setUpdatedBooking({
      id: "",
      restaurantId: restId,
      date: "",
      time: "",
      numberOfGuests: 0,
      customerId: "",
    });
    await getData();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNewBooking((prevBooking: IBooking) => ({
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

  return (
    <div key={booking._id} className="booking-card">
      <h3>{booking._id}</h3>
      <span>CustomerID: {booking.customerId}</span>
      <span>
        Date: {booking.date}, {booking.time}
      </span>
      <button className="details-button">Customer Details</button>
      <button className="update-button" onClick={toggleForm}>
        Edit
      </button>
      <button className="delete-button" onClick={deleteBooking}>
        Delete
      </button>
      <form
        onSubmit={submitEditedBooking}
        className={formState ? "edit-form-show" : "edit-form"}
      >
        <h3>Edit Booking</h3>
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
    </div>
  );
};
