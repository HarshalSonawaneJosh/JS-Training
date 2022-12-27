import "./BlogList.css";
import { Link } from "react-router-dom";

const BlogList = ({ todos, deleteHandle }) => {
  //or const BlogList = (blogs,title)

  return (
    <div className="blog-list">
      {todos.map((todo) => (
        <div className="blog-preview" key={todo.id}>
          <Link to={`/todoDetails/${todo.id}`}>
            <h2>
              {todo.title}
              &nbsp; &nbsp;
              <button onClick={() => deleteHandle(todo.id)}>Delete..</button>
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
