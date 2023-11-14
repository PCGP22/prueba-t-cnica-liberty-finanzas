import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function Filters() {
  const [state, dispatch] = useContext(dataContext);
  let offices = [...new Set(state.backupData.map((d) => d.oficina))].sort();
  console.log(offices);
  return (
    <div>
      <select>
        <option>Oficina</option>
        {offices.map((d) => (
          <option key={d.oficina}>{d.oficina}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
