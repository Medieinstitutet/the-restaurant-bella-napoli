import { useState } from "react";

export const ChoseNumberOfPersons = () => {
  const [nrOfGuests, setNrOfGuests] = useState(0);

  const buttons = [];
  for (let i = 1; i <= 90; i++) {
    buttons.push(
      <button key={i} onClick={() => setNrOfGuests(i)}>
        {i}
      </button>
    );
  }

  return (
    <div className="chosenumberofpersons-container">
      <h2>Välj antal gäster</h2>
      <p>Valt antal: {nrOfGuests}</p>
      <div className="buttons-container">{buttons}</div>
    </div>
  );
};
