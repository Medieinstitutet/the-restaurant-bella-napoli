import axios from "../../node_modules/axios/index";
const restId = import.meta.env.VITE_REST_ID;

export const updateBooking = async () => {
  const response = await axios.put(
    "https://school-restaurant-api.azurewebsites.net/booking/update/65c8d957cbb6491fd64e9a94",
    {
      id: "65c8d957cbb6491fd64e9a94",
      restaurantId: restId,
      date: "2022-01-01",
      time: "18:00",
      numberOfGuests: 6,
      customerId: "123",
    }
  );
  console.log(response.data);
};
