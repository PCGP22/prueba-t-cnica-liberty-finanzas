import { calculateAntiquityInDays } from "../utils/utils";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import usePagination from "../hooks/usePagination";

function Table() {
  const [fetchedData, data, setData] = useContext(dataContext);
  const [
    maxPages,
    currentPage,
    setCurrentPage,
    currentData,
    setNextPage,
    setPrevPage,
  ] = usePagination(fetchedData);
  console.log(data);
  // const [data] = usePagination(filteredData);
  // return;
  return (
    <table>
      <tbody>
        <tr>
          <th>Fianza</th>
          <th>Movimiento</th>
          <th>Fiado</th>
          <th>Antigüedad</th>
          <th>Días de vencimiento</th>
          <th>Importe</th>
        </tr>
        {currentData.primas.length > 0 &&
          currentData.primas.map((t) => {
            let antiquity = calculateAntiquityInDays(
              t.datos["fecha de emisión"]
            );
            let daysSinceStale = calculateAntiquityInDays(
              t.datos["fecha de vencimiento"]
            );
            if (daysSinceStale < 0) daysSinceStale = 0;
            return (
              <tr key={t.datos.código_de_fianza}>
                <td>{t.datos.código_de_fianza}</td>
                <td>{t.datos.tipo_de_movimiento}</td>
                <td>{t.datos.fiado}</td>
                <td>{antiquity}</td>
                <td>{daysSinceStale}</td>
                <td>${t.datos.importe.toLocaleString()}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
