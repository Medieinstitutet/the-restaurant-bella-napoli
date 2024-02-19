import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/components/Layout";
import { Landingpage } from "./pages/Landingpage";
import { Bookingpage } from "./pages/Bookingpage";
import { Checkoutpage } from "./pages/ConfirmBookingpage";

import { Admin } from "./pages/Admin";

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
        path: "booking",
        element: <Bookingpage />,
      },
      {
        path: "checkout",
        element: <Checkoutpage />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
