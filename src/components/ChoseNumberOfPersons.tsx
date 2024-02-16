import "../styles/_ChoseNumberOfPersons.scss";

export const ChoseNumberOfPersons = () => {
  const buttons = [];
  for (let i = 1; i <= 90; i++) {
    buttons.push(<button key={i}>{i}</button>);
  }

  return (
    <div className="chosenumberofpersons-container">
      <h2>Välj antal gäster</h2>

      <div className="buttons-container">{buttons}</div>
    </div>
  );
};
