import { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Table from "../components/Table";
import Pagination from "../components/pagination";
import usePagination from "../hooks/usePagination";

function TableContainer() {
  const [data] = useContext(dataContext);
  const { currentData } = usePagination();

  return <figure></figure>;
}

export default TableContainer;
