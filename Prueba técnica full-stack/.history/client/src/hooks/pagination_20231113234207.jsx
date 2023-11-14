import { useState } from "react";

const paginationHooks = (data) => {
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(data);

  let quantityPerPage = 5;

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
  function setPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return [maxPages, currentPage, setCurrentPage, setNextPage, setPrevPage];
};
