import axios from "axios";
const restId = import.meta.env.VITE_REST_ID;

export const getBooking = async () => {
  const response = await axios.get(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/" +
      restId
  );
  console.log(response.data);
};
