import { useState, useEffect } from "react";

const usePagination = () => {
  const quantityPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [initialData, setInitialData] = useState(null);
  const [currentData, setCurrentData] = useState({});
  const [maxPages, setMaxPages] = useState(1);

  function setData(data) {
    // setInitialData(data);
    // Divides the data, in groups of "quantityPerPage"
    let dividedData = data.slice(
      (currentPage - 1) * quantityPerPage,
      currentPage * quantityPerPage
    );
    setCurrentData(dividedData);
    setMaxPages(Math.ceil(data.length / quantityPerPage));
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

  return {
    maxPages,
    currentPage,
    setCurrentPage,
    setData,
    currentData,
    setNextPage,
    setPrevPage,
  };
};

export default usePagination;
