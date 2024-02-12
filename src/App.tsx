import "./App.scss";
import { getRest } from "./api/getRest";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { createBooking } from "./services/createBooking";

import { deleteBooking } from "./services/deleteBooking";
import { updateBooking } from "./services/updateBooking";
function App() {
  // createBooking();
  // getRest();
  // getBooking();
  // deleteBooking();
  // updateBooking();

  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
