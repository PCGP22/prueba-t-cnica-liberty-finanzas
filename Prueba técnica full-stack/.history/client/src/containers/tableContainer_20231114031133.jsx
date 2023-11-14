import { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Table from "../components/Table";
import Pagination from "../components/pagination";
import usePagination from "../hooks/usePagination";

function TableContainer() {
  const [data] = useContext(dataContext);
  const { setData, currentData } = usePagination();
  useEffect(() => {
    setData(data.primas);
  }, [data]);

  return (
    <figure>
      <Table data={currentData} />
      <Pagination />
    </figure>
  );
}

export default TableContainer;
