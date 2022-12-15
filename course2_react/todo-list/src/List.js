const List = ({ names, deleteName, setNames, input, setInput }) => {
  //const handeledIt = deleteName();

  const addName = () => {
    let newId = names.length === 0 ? 1 : names[names.length - 1].id + 1;

    const tempObj = { id: newId, n1: input };
    console.log(tempObj);
    setNames([...names, tempObj]);
    console.log(names);
  };

  const addOnChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <div className="list">
      <input value={input} type="text" onChange={addOnChange} />
      <button onClick={addName}>add name</button>
      {names.map((name) => (
        <div className="name-preview">
          <label>{name.n1} : </label>
          <button
            onClick={() => {
              deleteName(name.id);
            }}
          >
            Delete name
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
