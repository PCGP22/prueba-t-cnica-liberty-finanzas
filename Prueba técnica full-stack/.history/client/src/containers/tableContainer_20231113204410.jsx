import { useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/pagination";

function TableContainer() {
  const [currentPage, setCurrentPage] = useState(0);
  //This part of the code allows pagination
  let currentData = data.slice(currentPage * 5 + 1, (currentPage + 1) * 5);
  return <div>tableContainer</div>;
}

export default TableContainer;
