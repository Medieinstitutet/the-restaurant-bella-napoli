import axios from "axios";
import { Booking } from "../models/Booking";

export const postBooking = async (updatedBooking: Booking) => {
  const response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/booking/create",
    updatedBooking
  );
  console.log(response);

  return response.data;
};
