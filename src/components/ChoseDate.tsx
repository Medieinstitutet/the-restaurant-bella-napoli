import React, { useState } from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Dayjs } from "dayjs";

export const ChoseDate = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };
  const formattedDate = selectedDate
    ? selectedDate.format("YYYY-MM-DD")
    : "Ingen datum vald";

  return (
    <div className="date-container">
      <h2>Välj datum</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Datum"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
      <p>Valt datum: {formattedDate}</p>
    </div>
  );
};
