import { IBookingAdmin } from "../models/IBookingAdmin";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface IBookingPresentationProps {
  booking: IBookingAdmin;
  setBookings: Dispatch<SetStateAction<IBookingAdmin[] | undefined>>;
}

export const BookingPresentation = ({
  booking,
  setBookings,
}: IBookingPresentationProps) => {
  const deleteBooking = async () => {
    await axios.delete(
      "https://school-restaurant-api.azurewebsites.net/booking/delete/" +
        booking._id
    );
    setBookings((Bookings) => Bookings?.filter((b) => b._id !== booking._id));
  };
  return (
    <div key={booking._id} className="booking-card">
      <h3>{booking._id}</h3>
      <span>CustomerID: {booking.customerId}</span>
      <span>
        Date: {booking.date}, {booking.time}
      </span>
      <button className="details-button">Customer Details</button>
      <button className="update-button">Update</button>
      <button className="delete-button" onClick={deleteBooking}>
        Delete
      </button>
    </div>
  );
};
