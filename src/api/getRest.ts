import axios from "axios";
const restId = import.meta.env.VITE_REST_ID;

export const getRest = async () => {
  const response = await axios.get(
    "https://school-restaurant-api.azurewebsites.net/restaurant/" + restId
  );
  console.log(response.data);
};
