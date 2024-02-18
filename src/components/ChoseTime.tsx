import { useState } from "react";

export const ChoseTime = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="chosetime-container">
      <h2>Välj tid</h2>
      <button onClick={() => handleTimeChange("18.00")}>18.00</button>
      <button onClick={() => handleTimeChange("21.00")}>21.00</button>
      {selectedTime && <p>Vald tid: {selectedTime}</p>}
    </div>
  );
};
