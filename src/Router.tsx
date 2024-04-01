import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/components/Layout";
import { Landingpage } from "./pages/Landingpage";

import { Admin } from "./pages/Admin";
import BookingForm from "./components/BookingCreate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: "bookingForm",
        element: <BookingForm />,
      },

      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);