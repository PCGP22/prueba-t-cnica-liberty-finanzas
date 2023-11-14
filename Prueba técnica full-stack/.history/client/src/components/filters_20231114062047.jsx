import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function Filters() {
  const [state, dispatch] = useContext(dataContext);
  if (!state.backupData.length) return;
  let offices = [...new Set(state.backupData.map((d) => d.oficina))].sort();
  let agents = [...new Set(state.backupData.map((d) => d.agente))].sort();

  return (
    <div>
      <select>
        <option>Oficina</option>
        {offices.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
      <select>
        <option>Agente</option>
        {agents.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
