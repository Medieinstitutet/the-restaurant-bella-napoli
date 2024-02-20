import { IBookingAdmin } from "../models/IBookingAdmin";
import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { updateBooking } from "../services/updateBooking";
import { getBookings } from "../services/getBooking";
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
}: IBookingPresentationProps) => {
  const [formState, setFormState] = useState(false);
  const [updatedBooking, setUpdatedBooking] = useState<IUpdateBooking>({
    id: booking._id,
    restaurantId: restId,
    date: "2024-02-02",
    time: "21:00",
    numberOfGuests: 2,
    customerId: booking.customerId,
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
      id: booking._id,
      restaurantId: restId,
      date: "2024-02-02",
      time: "21:00",
      numberOfGuests: 2,
      customerId: booking.customerId,
    });
    await getData();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUpdatedBooking((prevBooking: IUpdateBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
    console.log(e.target.value);
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
            value={updatedBooking.date}
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
            value={updatedBooking.numberOfGuests}
            min={0}
            max={6}
          />
        </label>
        <label>
          Time:
          <select
            value={updatedBooking.time}
            onChange={handleChange}
            name="time"
          >
            <option>18:00</option>
            <option>21:00</option>
          </select>
        </label>
        <button>Add booking</button>
      </form>
    </div>
  );
};
