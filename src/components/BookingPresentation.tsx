import { IBookingAdmin } from "../models/IBookingAdmin";

interface IBookingPresentationProps {
  booking: IBookingAdmin;
}

export const BookingPresentation = ({ booking }: IBookingPresentationProps) => {
  return (
    <div key={booking._id}>
      <h3>{booking.time}</h3>
      <span>{booking.customerId}</span>
      <button className="details-button">Customer Details</button>
      <button className="update-button">Update</button>
      <button className="delete-button">Delete</button>
    </div>
  );
};
