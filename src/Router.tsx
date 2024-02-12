import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landingpage } from "./pages/Landingpage";
import { Bookingpage } from "./pages/Bookingpage";
import { Checkoutpage } from "./pages/Checkoutpage";
import Contact from "./components/Contact";

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
        path: "/booking",
        element: <Bookingpage />,
      },
      {
        path: "/checkout",
        element: <Checkoutpage />,
      },
      {
      path: "/contact",
      element: <Contact />,
    },
    ],
  },
]);
