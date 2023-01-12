import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const [search, setSearch] = useState("");
  const [sortDirection, setSortDirection] = useState("0");
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(blogs);
  //Searching the todo list.
  const filteredTodo = useMemo(() => {
    setFilteredTodos(
      blogs.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  //sorting the todo list.
  const sorting = useMemo(() => {
    filteredTodos.sort((a, b) =>
      sortDirection === "0"
        ? a.title > b.title
          ? 1
          : -1
        : a.title > b.title
        ? -1
        : 1
    );
  }, [sortDirection]);

  const statusHandle = useMemo(() => {
    if (status === "All") {
      setFilteredTodos(blogs);
      //console.log(filteredTodos);
    } else if (status === "completed" || status === "pending") {
      setFilteredTodos(blogs.filter((todo) => todo.status.includes(status)));
      //console.log(filteredTodos);
    }
  }, [status]);

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <br />
      <label>Search title : </label>
      <input
        type="text"
        value={search}
        placeholder="Search todos..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <label>Sort : </label>
      <select onChange={(e) => setSortDirection(e.target.value)}>
        <option value={"0"}>A-Z</option>
        <option value={"1"}>Z-A</option>
      </select>
      <br />
      <label>Status:</label>
      <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>

      {filteredTodos.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
