import { useState } from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Dayjs } from "dayjs";

export const ChoseDate = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const displayDate = selectedDate
    ? selectedDate.format("YYYY-MM-DD")
    : "Inget datum valt";

  return (
    <div className="date-container">
      <h2>Välj datum</h2>
      <p>Valt datum: {displayDate}</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Datum"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
    </div>
  );
};
