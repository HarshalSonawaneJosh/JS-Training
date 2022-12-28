import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { todos, isPending, error } = useFetch(
    "http://localhost:8001/todos/" + id
  );

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todos && (
        <article>
          <h2>{todos.id}</h2>
          <p>Written by {todos.title}</p>
          <div>{todos.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
