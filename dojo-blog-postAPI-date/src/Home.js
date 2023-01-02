import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { InfinitySpin } from "react-loader-spinner";

const Home = () => {
  /*1.->
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  */
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  /*
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "harshal",
      id: 3,
    },
   
  ]); */

  //another hook element i.e useEffect.

  /*1.->
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError = null;
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);
*/
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
