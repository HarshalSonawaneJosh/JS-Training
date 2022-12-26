import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [todos, setTodos] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //   const [newToDo, setNewTODo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return {
    todos,
    setTodos,
    isPending,
    setIsPending,
    error,
    setError,
    // newToDo,
    // setNewTODo,
  };
};

export default useFetch;
