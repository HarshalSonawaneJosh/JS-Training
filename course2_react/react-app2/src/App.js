import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import useFetch from "./useFetch";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function App() {
  const { todos, setTodos, isPending, setIsPending, error, setError } =
    useFetch("http://localhost:8001/todos");
  //http://localhost:8000/todos

  const [newToDo, setNewTODo] = useState();

  const addTitle = () => {
    let temp = { id: todos.length + 1, title: newToDo, completed: false };
    if (newToDo.length > 3) {
      setTodos([...todos, temp]);
    }

    setNewTODo("");

    fetch("http://localhost:8001/todos", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: { "content-type": "application/json" },
    });
  };

  const resetInputField = () => {
    setTodos("");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            {/* <Route path="/blogs/:id">
              <BlogDetails />
            </Route> */}
            <Route path="/create">
              <Create
                newToDo={newToDo}
                setNewTODo={setNewTODo}
                addTitle={addTitle}
                resetInputField={resetInputField}
              />
            </Route>
            <Route path="/todoDetails/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
