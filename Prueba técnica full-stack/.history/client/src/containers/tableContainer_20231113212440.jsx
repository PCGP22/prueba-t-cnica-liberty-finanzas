import { useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

function TableContainer({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  //This part of the code allows pagination
  let quantityPerPage = 5;
  let maxPages = Math.ceil(data.length / quantityPerPage);
  let currentData = data.slice(
    currentPage * quantityPerPage, //From first element on the current page "0"
    (currentPage + 1) * quantityPerPage - 1 //To the last element "4"
  );

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
  function setPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function setPage(page) {
    setCurrentPage(page);
  }

  return (
    <figure>
      <Table data={data} />
      <Pagination
        currentPage={currentPage}
        maxPages={maxPages ?? 0}
        setNextPage={setNextPage}
        setCurrentPage={setCurrentPage}
      />
    </figure>
  );
}

export default TableContainer;
