import { useState } from "react";

export const ChoseNumberOfPersons = () => {
  const [nrOfGuests, setNrOfGuests] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const buttons = [];
  const maxButtons = showMore ? 90 : 15;
  for (let i = 1; i <= maxButtons; i++) {
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
      <button className="showmore-button" onClick={toggleShowMore}>
        {showMore ? "Visa färre" : "Visa fler"}
      </button>
    </div>
  );
};
