import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import { InfinitySpin } from "react-loader-spinner";
import "./Home.css";
import "./AddInput.css";
import InputBox from "./InputBox";
import useFetch from "./useFetch";

const Home = () => {
  const {
    todos,
    setTodos,
    isPending,
    setIsPending,
    error,
    setError,
    newToDo,
    setNewTODo,
  } = useFetch("http://localhost:8001/todos");
  //http://localhost:8000/todos

  const deleteHandle = (id) => {
    console.log(id);
    const newToDo = todos.filter((todo) => todo.id !== id);
    setTodos(newToDo);
  };

  const addTitle = () => {
    let temp = { id: todos.length + 1, title: newToDo, completed: false };
    if (newToDo.length > 3) {
      setTodos([...todos, temp]);
    }
    setNewTODo("");
  };

  const resetInputField = () => {
    setTodos("");
  };

  console.log(isPending);

  return (
    <div className="home">
      {isPending && (
        <div>
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      )}
      {todos !== null ? (
        <>
          <InputBox
            newToDo={newToDo}
            setNewTODo={setNewTODo}
            addTitle={addTitle}
            resetInputField={resetInputField}
          />
          <BlogList todos={todos} deleteHandle={deleteHandle} />
        </>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Home;
