import { useEffect, useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

function TableContainer({ data }) {
  //This part of the code allows pagination

  return (
    <figure>
      <Table data={currentData} />
      <Pagination />
    </figure>
  );
}

export default TableContainer;
