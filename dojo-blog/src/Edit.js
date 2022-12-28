import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const history = useHistory();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleEdit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      history.push("/");
    });
  };

  useEffect(() => {
    if (blog !== null) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(body.author);
    }
  }, [blog]);

  return (
    <>
      {!isPending ? (
        <div className="create">
          <h2>Add a New Blog</h2>
          <form onSubmit={handleEdit}>
            <label>Blog title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label>Blog body:</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label>Blog author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>

            {!isPending && <button>Update Blog</button>}
            {isPending && <button disabled>Updating blog...</button>}
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Edit;
