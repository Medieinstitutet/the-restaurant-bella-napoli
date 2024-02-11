import "./App.scss";
import { getRest } from "./api/getRest";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { createBooking } from "./services/createBooking";
import { getBooking } from "./services/getBooking";
import { deleteBooking } from "./services/deleteBooking";
function App() {
  // createBooking();
  // getRest();
  getBooking();
  deleteBooking();

  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
