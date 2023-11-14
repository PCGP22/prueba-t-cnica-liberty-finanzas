import React, { useState } from "react";

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
          return (
            <tr key={currentPage}>
              <td>{t.datos.código_de_fianza}</td>
              <td>{t.datos.tipo_de_movimiento}</td>
              <td>{t.datos.fiado}</td>
              <td>{}</td>
            </tr>
          );
        })}
    </table>
  );
}

export default Table;
