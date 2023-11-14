import { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

function TableContainer() {
  const [data] = useContext(dataContext);

  return (
    <figure>
      <Table data={data.primas} />
    </figure>
  );
}

export default TableContainer;
