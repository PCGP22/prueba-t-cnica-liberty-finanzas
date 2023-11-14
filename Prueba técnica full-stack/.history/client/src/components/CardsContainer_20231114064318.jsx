import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function CardsContainer() {
  const [state, dispatch] = useContext(dataContext);
  if (!state.backupData.length) return; //Failsafe if data is not loaded
  return <div>CardsContainer</div>;
}

export default CardsContainer;
