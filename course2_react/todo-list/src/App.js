import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState([
    { n1: "Harshal", id: 1 },
    { n1: "Jayesh", id: 2 },
    { n1: "Vicky", id: 3 },
  ]);

  const deleteName = (id) => {
    const newName = names.filter((name) => name.id !== id);
    setNames(newName);
  };

  return (
    <div className="app">
      <h1>Welcome to TODO-LIST..!</h1>
      <List
        names={names}
        setNames={setNames}
        deleteName={deleteName}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
