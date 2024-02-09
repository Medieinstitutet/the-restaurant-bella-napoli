import axios from "axios";

export const getData = async () => {
  const response = await axios.get(
    "https://school-restaurant-api.azurewebsites.net/restaurant/65c5ff2f12ebb6ed53265abf"
  );
  console.log(response.data);
};
