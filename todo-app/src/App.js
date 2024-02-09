// functional component
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import PageNotFound from "./components/PageNotFound";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// useReducer {  text: "", todoList  }
// useContext or Redux ==> Avoid Props Drilling

const App = () => {
  let [text, setText] = useState(""); // [value,updateFunction]
  let [todoList, setTodoList] = useState([
    {
      name: "task-1",
    },
    { name: "task-2" },
    { name: "task-3" },
    { name: "task-4" },
    { name: "task-5" },
  ]); // [ [], updateFunction  ]

  // click operation on button
  let saveTodo = () => {
    let newTodo = {
      name: text,
    }; // {name:"React"}

    // array or object deep copy
    let _todoList = [...todoList];
    _todoList.push(newTodo);
    setTodoList(_todoList); // update array
    setText(""); // reset input
  };

  let inputChange = (event) => {
    setText(event.target.value);
  };

  // call a api
  return (
    <>
      {/* /todo/input */}
      <Routes>
        <Route path="/" element={<Navigate to="/todo/input" />} />
        <Route path="/todo" element={<Todo />}>
          <Route
            path="input"
            element={
              <TodoInput
                textProp={text}
                inputChangeProp={inputChange}
                saveTodoProp={saveTodo}
              />
            }
          />
          <Route path="list" element={<TodoList todoList={todoList} />} />
        </Route>
        <Route path="*" element={<Navigate to="/todo/input" />} />
      </Routes>
    </>
  );
};

// <Route path="*" element={<PageNotFound />} />
{
  /* <Route path="*" element={<Navigate to="/" />} /> */
}

// class App extends Component {
//   text = "React is awesome";
//   constructor() {
//     super();
//   }

//   render() {
//     return <h1>This is a class component {this.text}</h1>;
//   }
// }

// export
export default App;
