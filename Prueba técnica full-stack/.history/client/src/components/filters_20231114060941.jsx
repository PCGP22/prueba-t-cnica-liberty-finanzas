import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function Filters() {
  const [state, dispatch] = useContext(dataContext);

  return (
    <div>
      <select>
        <option>Oficina</option>
        {[...new Set(state.backupData)].sort().map((d) => (
          <option key={d.oficina}>{d.oficina}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
