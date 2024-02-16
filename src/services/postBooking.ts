import axios from "axios";
import { IBooking } from "../models/IBooking";

export const postBooking = async (newBooking: IBooking) => {
  const response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/booking/create",
    newBooking
  );
  console.log(response);

  return response.data;
};
