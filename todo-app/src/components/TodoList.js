const TodoList = (props) => {
  let { todoList } = props;
  return (
    <>
      <section>
        <ul className="list">
          {todoList.map((value, index) => {
            return <li key={index}>{value.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
