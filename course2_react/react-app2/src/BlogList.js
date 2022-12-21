import "./BlogList.css";
const BlogList = ({ todos, deleteHandle }) => {
  //or const BlogList = (blogs,title)

  return (
    <div className="blog-list">
      {todos.map((todo) => (
        <div className="blog-preview" key={todo.id}>
          <h2>
            {todo.title}
            &nbsp; &nbsp;
            <button onClick={() => deleteHandle(todo.id)}>Delete..</button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
