import { useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

function TableContainer({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  //This part of the code allows pagination
  let quantityPerPage = 5;
  let currentData = data.slice(
    currentPage * quantityPerPage,
    (currentPage + 1) * quantityPerPage
  );
  let maxPages = Math.ceil(data.length / quantityPerPage);
  function setNextPage() {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function setNextPage() {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <figure>
      <Table data={data} />
      <Pagination
        currentPage={currentPage}
        maxPages={maxPages}
        setNextPage={setNextPage}
      />
    </figure>
  );
}

export default TableContainer;
