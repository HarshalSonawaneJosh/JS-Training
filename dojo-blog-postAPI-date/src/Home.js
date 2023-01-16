import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { getTodos } from "./services/todoServices";

const Home = () => {
  const pageLimit = 3;
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("id");
  const [sortDirection, setSortDirection] = useState("ASC");
  const [status, setStatus] = useState(undefined);

  const { data, isLoading, error } = useQuery(
    ["key", pageNumber, sort, sortDirection, status, search],
    () => {
      if (status === "All") {
        setStatus(undefined);
      }

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

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  console.log("blogs", data);

  return (
    <div className="home">
      {isLoading && (
        <InfinitySpin type="Circles" color="red" height={150} width={150} />
      )}
      {error && <div>{error}</div>}
      {data && (
        <BlogList
          data={data}
          title="All tags!"
          sort={sort}
          setSort={setSort}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          status={status}
          setStatus={setStatus}
          search={search}
          setSearch={setSearch}
        />
      )}
      <button onClick={previousPage} disabled={pageNumber === 1}>
        Prev
      </button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Home;
