import { useState, useEffect } from "react";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";

const usePagination = () => {
  const quantityPerPage = 8;

  const {
    maxPages,
    currentPage,
    setCurrentPage,
    setData,
    currentData,
    setNextPage,
    setPrevPage,
  } = useContext(dataContext);

  function setData(data) {
    setInitialData(data);
    // Divides the data, in groups of "quantityPerPage"
    let dividedData = data.slice(
      (currentPage - 1) * quantityPerPage,
      currentPage * quantityPerPage
    );
    setCurrentData(dividedData);
    setMaxPages(Math.ceil(initialData.length / quantityPerPage));
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
