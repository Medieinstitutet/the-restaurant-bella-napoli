import axios from "../../node_modules/axios/index";

export const deleteBooking = async () => {
  const response = await axios.delete(
    "https://school-restaurant-api.azurewebsites.net/booking/delete/65c8d957cbb6491fd64e9a95"
  );
  console.log(response.data);
};
