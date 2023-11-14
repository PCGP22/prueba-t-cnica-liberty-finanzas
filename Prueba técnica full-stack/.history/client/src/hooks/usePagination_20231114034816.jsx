import { useState, useEffect } from "react";

const usePagination = () => {
  const quantityPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState({});
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    // console.log(currentData);
    //Failsafe in case the data is still loading
    if (currentData.length > 0) {
    }
  }, [currentPage]);

  function setData(data) {
    // Divides the data, in groups of "quantityPerPage"
    let dividedData = data.slice(
      (currentPage - 1) * quantityPerPage,
      currentPage * quantityPerPage
    );
    setCurrentData(dividedData);
    setMaxPages(currentData.length / quantityPerPage);
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
