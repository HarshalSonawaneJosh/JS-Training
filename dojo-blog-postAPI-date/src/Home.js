import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { InfinitySpin } from "react-loader-spinner";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && (
        <InfinitySpin type="Circles" color="red" height={150} width={150} />
      )}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All tags!" />}
    </div>
  );
};

export default Home;
