import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function Filters() {
  const [state, dispatch] = useContext(dataContext);
  if (!state.backupData.length) return;
  let offices = [...new Set(state.backupData.map((d) => d.oficina))].sort();
  let agents = [...new Set(state.backupData.map((d) => d.agente))].sort();
  let executives = [
    ...new Set(state.backupData.map((d) => d.ejecutiva)),
  ].sort();

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({
            type: "filter",
            payload: { type: "oficina", filter: e.target.value },
          })
        }>
        <option value="">Oficina</option>
        {offices.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch({
            type: "filter",
            payload: { type: "agente", filter: e.target.value },
          })
        }>
        <option value="">Agente</option>
        {agents.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch({
            type: "filter",
            payload: { type: "ejecutiva", filter: e.target.value },
          })
        }>
        <option value="">Ejecutiva</option>
        {executives.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
