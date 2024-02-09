import axios from "../../node_modules/axios/index";
const restId = import.meta.env.VITE_REST_ID;

export const createBooking = () => {
  axios
    .post("https://school-restaurant-api.azurewebsites.net/booking/create", {
      restaurantId: restId,
      date: "2022-01-01",
      time: "18:00",
      numberOfGuests: 4,
      customer: {
        name: "Franzén",
        lastname: "Filip",
        email: "someone@somedomain.com",
        phone: "070-1112233",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
