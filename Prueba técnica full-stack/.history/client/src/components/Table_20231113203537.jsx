import React, { useState } from "react";
import { calculateAntiquityInDays } from "../utils/utils";

function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  let tableData = data.slice(currentPage * 5 + 1, (currentPage + 1) * 5);
  return (
    <table>
      <tr>
        <th>Fianza</th>
        <th>Movimiento</th>
        <th>Fiado</th>
        <th>Antigüedad</th>
        <th>Días de vencimiento</th>
        <th>Importe</th>
      </tr>
      {tableData &&
        tableData.map((t) => {
          let antiquity = calculateAntiquityInDays(t.datos["fecha de emisión"]);
          let daysSinceStale = calculateAntiquityInDays(
            t.datos["fecha de vencimiento"]
          );
          return (
            <tr key={currentPage}>
              <td>{t.datos.código_de_fianza}</td>
              <td>{t.datos.tipo_de_movimiento}</td>
              <td>{t.datos.fiado}</td>
              <td>{antiquity}</td>
              <td>{daysSinceStale}</td>
              <td>{t.datos.importe}</td>
            </tr>
          );
        })}
    </table>
  );
}

export default Table;
