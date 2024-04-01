import axios from "../../node_modules/axios/index";
export const postRest = () => {
  axios
    .post("https://school-restaurant-api.azurewebsites.net/restaurant/create", {
      name: "Bella Napoli",
      address: {
        street: "Drottninggatan 50",
        zip: "123 45",
        city: "Stockholm",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
