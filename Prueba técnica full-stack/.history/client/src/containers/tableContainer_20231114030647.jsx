import { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

function TableContainer() {
  const [data] = useContext(dataContext);
  const { currentData } = usePagination(data.primas);

  return (
    <figure>
      <Table data={currentData} />
    </figure>
  );
}

export default TableContainer;
