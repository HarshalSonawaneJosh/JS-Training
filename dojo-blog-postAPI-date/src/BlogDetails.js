import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  // const handleEdit = (e) => {
  //   history.push(`/blogs/edit/${blog.id}`);
  // };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <div>{blog.date}</div>
          <button onClick={handleClick}>Delete</button>
          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
