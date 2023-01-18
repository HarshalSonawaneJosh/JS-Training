// import Home from "../Home";
import { getTodos } from "../services/todoServices";
import { useQuery } from "react-query";

const useToDoList = (pageNumber, sort, sortDirection, status, search) => {
  const pageLimit = 15;

  return useQuery(
    ["key", pageNumber, sort, sortDirection, status, search],
    () => {
      return getTodos({
        _page: pageNumber,
        _limit: pageLimit,
        _sort: sort,
        _order: sortDirection,
        title_like: search,
        status: status,
      });
    }
  );
};

export default useToDoList;
