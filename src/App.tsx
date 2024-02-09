import "./App.scss";
import { getData } from "./api/getReq";
import { Router } from "./components/Router";
import { createBooking } from "./services/createBooking";
import { getBooking } from "./services/getBooking";
function App() {
  // createBooking();
  // getData();
  getBooking();

  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
