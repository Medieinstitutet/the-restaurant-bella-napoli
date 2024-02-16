import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/components/Layout";
import { Landingpage } from "./pages/Landingpage";
import { Bookingpage } from "./pages/Bookingpage";
import { Checkoutpage } from "./pages/Checkoutpage";
import { ChoseNumberOfPersons} from "../src/components/ChoseNumberOfPersons";
import { ChoseDate } from "../src/components/ChoseDate";
import { ChoseTime } from "../src/components/ChoseTime";
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
      }, {
            path: "bookingForm",
            element: <BookingForm />,
          },
      {
        path: "booking",
        element: <Bookingpage />,
        children: [
          {
            path: "book-number-of-guests",
            element: <ChoseNumberOfPersons />,
            index: true,
          },
          {
            path: "book-on-date",
            element: <ChoseDate />,
          },
          {
            path: "book-on-time",
            element: <ChoseTime />,
          },

         
        ],
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
