import { useTodoContext } from "../../context/Todo.context";

const TodoList = () => {
  let { todoList } = useTodoContext();
  return (
    <>
      <ul>
        {todoList.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
