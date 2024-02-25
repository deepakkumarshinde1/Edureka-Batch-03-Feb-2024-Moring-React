import { useTodoContext } from "../../context/Todo.context";

const TodoInput = () => {
  const { input, changeInput, saveTodo } = useTodoContext();

  return (
    <>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={changeInput}
      />
      <button onClick={saveTodo}>Save</button>
    </>
  );
};

export default TodoInput;
