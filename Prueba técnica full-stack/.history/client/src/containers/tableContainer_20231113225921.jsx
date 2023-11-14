import { useEffect, useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

function TableContainer({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [maxPages, setMaxPages] = useState(1);
  //This part of the code allows pagination
  let quantityPerPage = 5;
  useEffect(() => {
    if (data.length > 0) {
      console.log("in");
      let dividedData = data.slice(
        currentPage * quantityPerPage, //From first element on the current page "0"
        (currentPage + 1) * quantityPerPage //To the last element "4"
      );
      let maxNumberOfPages = Math.ceil(data.length / quantityPerPage);
      setCurrentData(dividedData);
      setMaxPages(maxNumberOfPages);
    }
  }, [data]);
  useEffect(() => {
    if (data.length > 0) {
      let dividedData = data.slice(
        (currentPage - 1) * quantityPerPage, //From first element on the current page "0"
        currentPage * quantityPerPage //To the last element "4"
      );
      setCurrentData(dividedData);
    }
  }, [currentPage]);
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
      <Table data={currentData} />
      <Pagination
        currentPage={currentPage}
        maxPages={maxPages ?? 1}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
        setCurrentPage={setCurrentPage}
      />
    </figure>
  );
}

export default TableContainer;
