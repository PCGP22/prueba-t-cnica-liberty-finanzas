import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function CardsContainer() {
  const [state, dispatch] = useContext(dataContext);
  if (!state.backupData.length) return; //Failsafe if data is not loaded
  const sum = state.backupData
    .map((d) => d.datos.importe)
    .reduce((prev, acc) => prev + acc)
    .toFixed(2);
  console.log(sum);
  return <div>CardsContainer</div>;
}

export default CardsContainer;
