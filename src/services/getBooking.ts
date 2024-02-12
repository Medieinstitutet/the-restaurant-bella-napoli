import axios from "axios";
import { IBooking } from "../models/IBooking";
import { IBookingAdmin } from "../models/IBookingAdmin";
import { useEffect } from "react";
const restId = import.meta.env.VITE_REST_ID;

const getBooking = async () => {
  const response = await axios.get<IBookingAdmin>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/" +
      restId
  );
};
