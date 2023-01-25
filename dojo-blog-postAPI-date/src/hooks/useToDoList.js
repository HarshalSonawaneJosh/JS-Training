// // import Home from "../Home";
// import { getTodos } from "../services/todoServices";
// import { useQuery } from "react-query";

// const useToDoList = (blogState) => {
//   const pageLimit = 15;

//   return useQuery(["key", blogState], () => {
//     return getTodos({
//       _page: blogState.pageNumber,
//       _limit: blogState.pageLimit,
//       _sort: blogState.sort,
//       _order: blogState.sortDirection,
//       title_like: blogState.search,
//       status: blogState.status,
//     });
//   });
// };

import Home from "../Home";
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
