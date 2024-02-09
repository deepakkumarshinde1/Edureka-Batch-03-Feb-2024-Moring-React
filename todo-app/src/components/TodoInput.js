const TodoInput = (props) => {
  let { inputChangeProp, textProp, saveTodoProp } = props;
  console.log("COmponent re-rendered", textProp);
  return (
    <>
      <section className="flex">
        <input
          onChange={inputChangeProp}
          type="text"
          value={textProp}
          placeholder="Enter Todo"
          className="input-control"
        />
        <button className="btn-save" onClick={saveTodoProp}>
          Save
        </button>
      </section>
    </>
  );
};

export default TodoInput;
