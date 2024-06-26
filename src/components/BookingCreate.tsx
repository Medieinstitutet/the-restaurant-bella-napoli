import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/_bookingCreate.scss";
import { IBooking } from "../models/IBooking";
import { Link } from "react-router-dom";

export const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const TotalTables = 15;
  const restaurantId = import.meta.env.VITE_REST_ID;

  useEffect(() => {
    const customFetch = async () => {
      try {
        const response = await axios.get<IBooking[]>(
          `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${restaurantId}`
        );
        setBookings(response.data);

        response.data.forEach((booking) => {
          console.log(`Customer name: ${booking.customer.name} ${booking.customer.lastname}`);
        });
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    customFetch();
  }, [restaurantId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gdprConsent) {
      alert("Vänligen godkänn GDPR för att boka.");
      return;
    }

    setIsLoading(true);

    const matchingBookings = bookings.filter(
      (booking: IBooking) => booking.date === date && booking.time === time
    );

    const totalBookings = matchingBookings.length;

    if (totalBookings <= TotalTables) {
      try {
        const response = await axios.post(
          "https://school-restaurant-api.azurewebsites.net/booking/create",
          {
            restaurantId: restaurantId,
            date,
            time,
            numberOfGuests,
            customer: {
              name,
              lastname,
              email,
              phone,
            },
          }
        );
        console.log(response.data);
        alert("Bokning skapad för " + date + " " + time);
        window.location.href = "/";
      } catch (error) {
        console.error("Error creating booking:", error);
        alert("Något gick fel, dubbelkolla uppgifterna ");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Det finns tyvärr inga lediga bord på denna tidpunkt.");
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const matchingBookings = bookings.filter(
      (booking: IBooking) => booking.date === date && booking.time === time
    );

    const totalBookings = matchingBookings.length;

    if (numberOfGuests < 1) {
      alert("Ange antal gäster");
      return;
    }

    const selectedDateTime = new Date(`${date}T${time}`);
    const currentDateTime = new Date();

    if (!date || !time) {
      alert("Vänligen välj både datum och tid.");
      return;
    } else if (selectedDateTime < currentDateTime) {
      alert("Vänligen välj ett datum och tid som är framåt i tiden.");
      return;
    }

    if (totalBookings <= TotalTables) {
      setShowBookingForm(true);
    } else {
      alert("Det finns tyvärr inga lediga bord på denna tidpunkt.");
    }
  };

  const dateNow = new Date();
  const currentDate = `${dateNow.getFullYear()}-${
    dateNow.getMonth() + 1
  }-${dateNow.getDate()}`;

  return (
    <div className="booking-form">
      <>
        <ul className="backuttonUl">
          <li className="backuttonLi">
            <Link className="aa" to={"/"}>
              Till Startsidan
            </Link>
          </li>
        </ul>
      </>

      <label htmlFor="date">Datum:</label>
      <input
        type="date"
        id="date"
        value={date}
        min={currentDate}
        required
        onChange={(e) => setDate(e.target.value)}
        className="booking-form__input"
      />

      <label htmlFor="time">Tid:</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="booking-form__input"
        required
      >
        <option value="18:00">18:00</option>
        <option value="21:00">21:00</option>
      </select>

      <label htmlFor="numberOfGuests">Antal gäster:</label>
      <input
        type="number"
        id="numberOfGuests"
        min="1"
        max="6"
        required
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(Number(e.target.value))}
        className="booking-form__input"
      />

      <button className="booking-form__btn" onClick={handleSearch}>
        Sök
      </button>
      {showBookingForm && (
        <form className="booking-form__form" onSubmit={handleSubmit}>
          <h2 className="booking-form__h2">
            Bokning för {date} kl {time}
          </h2>
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="booking-form__input"
          />

          <label htmlFor="lastname">Efternamn:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            className="booking-form__input"
          />

          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="booking-form__input"
          />

          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="booking-form__input"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="XXXXXXXXXX"
          />

          <div className="booking-form__checkbox">
            <input
              type="checkbox"
              id="gdprConsent"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
            />
            <label htmlFor="gdprConsent">Jag godkänner GDPR</label>
          </div>

          <button type="submit" className="booking-form__btn">
            Skapa bokning
          </button>
        </form>
      )}
      <div className="spinner-container">
        {isLoading && <div className="spinner"></div>}
      </div>
    </div>
  );
};

export default BookingForm;
