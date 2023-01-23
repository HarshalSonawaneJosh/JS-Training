import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { getTodos } from "./services/todoServices";
import useToDoList from "./hooks/useToDoList";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("id");
  const [sortDirection, setSortDirection] = useState("ASC");
  const [status, setStatus] = useState(undefined);
  const [trigger, setTrigger] = useState("");

  const { data, isLoading, error } = useToDoList(
    pageNumber,
    sort,
    sortDirection,
    status,
    trigger
  );

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const triggerHandler = () => {
    setTrigger(search);
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
          triggerHandler={triggerHandler}
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
