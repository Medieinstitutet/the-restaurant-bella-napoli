import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { Landingpage } from "../pages/Landingpage";
import { Bookingpage } from "../pages/Bookingpage";
import { Checkoutpage } from "../pages/Checkoutpage";
import { ChoseNumberOfPersons } from "./ChoseNumberOfPersons";
import { ChoseDate } from "./ChoseDate";
import { ChoseTime } from "./ChoseTime";

const router = createBrowserRouter([
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
        children: [
          {
            path: "book-number-of-guests",
            element: <ChoseNumberOfPersons></ChoseNumberOfPersons>,
          },
          {
            path: "book-on-date",
            element: <ChoseDate></ChoseDate>,
          },
          {
            path: "book-on-time",
            element: <ChoseTime></ChoseTime>,
          },
        ],
      },
      {
        path: "checkout",
        element: <Checkoutpage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
