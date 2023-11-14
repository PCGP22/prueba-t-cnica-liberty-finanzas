function reducer(state, action) {
  function divideData(data, currentPage, state) {
    let dividedData = data.slice(
      (currentPage - 1) * state.contentPerPage,
      currentPage * state.contentPerPage
    );
    return dividedData;
  }
  function calculateMaxPages(data, state) {
    let maxPages = Math.ceil(data.length / state.contentPerPage);
    return maxPages;
  }
  function filterThenDivide(payload, state) {
    let filtered = state.backupData.filter(
      (d) => d[payload.type] === payload.filter
    );
    return divideData(filtered, 1, state);
  }
  const { type, payload } = action;
  switch (type) {
    case "initialize":
      return {
        ...state,
        backupData: payload,
        data: payload,
        dataToShow: divideData(payload, 1, state),
        maxPages: calculateMaxPages(payload, state),
      };
    case "prevPage":
      if (state.currentPage > 1) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
          dataToShow: divideData(state.data, state.currentPage - 1, state),
        };
      } else return state;
    case "nextPage":
      if (state.currentPage < state.maxPages) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
          dataToShow: divideData(state.data, state.currentPage + 1, state),
        };
      } else return state;
    case "setPage":
      return {
        ...state,
        currentPage: payload,
        dataToShow: divideData(state.data, payload, state),
      };
    case "filter":
      if (payload.filter === "") {
        return {
          ...state,
          dataToShow: divideData(state.backupData, 1, state),
          maxPages: calculateMaxPages(state.backupData, state),
        };
      } else
        return {
          ...state,
          dataToShow: filterThenDivide(payload, state),
          maxPages: calculateMaxPages(state.dataToShow, state),
        };
    default:
      return state;
  }
}

export default reducer;
