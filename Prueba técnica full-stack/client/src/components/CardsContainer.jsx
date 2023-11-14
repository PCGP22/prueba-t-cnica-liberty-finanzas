import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Card from "./Card";

function CardsContainer() {
  const [state, dispatch] = useContext(dataContext);
  if (!state.backupData.length) return; //Failsafe if data is not loaded

  return (
    <div className="cards">
      <Card currency={"mxn"} />
      <Card currency={"usd"} />
      <Card currency={"eur"} />
    </div>
  );
}

export default CardsContainer;
