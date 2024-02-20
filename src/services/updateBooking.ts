import axios from "../../node_modules/axios/index";
import { IUpdateBooking } from "../models/IUpdateBooking";

export const updateBooking = async (updatedBooking: IUpdateBooking) => {
  const response = await axios.put(
    "https://school-restaurant-api.azurewebsites.net/booking/update/" +
      updatedBooking.id,
    updatedBooking
  );
  console.log(response.data);

  return response.data;
};
