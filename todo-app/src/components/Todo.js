import { useState } from "react";

const Todo = () => {
  let [text, setText] = useState("deepak"); // [value,updateFunction]

  // click operation on button
  let changeText = () => {
    setText("Edureka");
  };
  return (
    <>
      <h1>{text}</h1>
      <section className="flex">
        <input type="text" placeholder="Enter Todo" className="input-control" />
        <button className="btn-save" onClick={changeText}>
          Save
        </button>
      </section>
      <section>
        <ul className="list">
          <li>Task-1</li>
          <li>Task-1</li>
          <li>Task-1</li>
          <li>Task-1</li>
        </ul>
      </section>
    </>
  );
};

export default Todo;
