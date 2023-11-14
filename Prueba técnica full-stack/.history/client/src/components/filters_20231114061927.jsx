import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function Filters() {
  const [state, dispatch] = useContext(dataContext);
  let offices = [...new Set(state.backupData.map((d) => d.oficina))].sort();

  return (
    <div>
      <select>
        <option>Oficina</option>
        {offices.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
