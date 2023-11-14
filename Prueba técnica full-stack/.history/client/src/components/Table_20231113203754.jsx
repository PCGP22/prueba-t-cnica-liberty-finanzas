import { useState } from "react";
import { calculateAntiquityInDays } from "../utils/utils";

function Table({ data }) {
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
      {data &&
        data.map((t) => {
          let antiquity = calculateAntiquityInDays(t.datos["fecha de emisión"]);
          let daysSinceStale = calculateAntiquityInDays(
            t.datos["fecha de vencimiento"]
          );
          return (
            <tr key={t.datos.código_de_fianza}>
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
