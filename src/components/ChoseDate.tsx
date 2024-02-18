import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const ChoseDate = () => {
  return (
    <div className="date-container">
      <h2>Välj datum</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker />
      </LocalizationProvider>
    </div>
  );
};
