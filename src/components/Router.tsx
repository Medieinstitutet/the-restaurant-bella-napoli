import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { Landingpage } from "../pages/Landingpage";
import { Bookingpage } from "../pages/Bookingpage";
import { Checkoutpage } from "../pages/Checkoutpage";

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
