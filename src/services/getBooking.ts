import axios from "axios";
import { IBookingAdmin } from "../models/IBookingAdmin";
const restId = import.meta.env.VITE_REST_ID;

export const getBookings = async () => {
  const response = await axios.get<IBookingAdmin[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/" +
      restId
  );

  return response;
};
