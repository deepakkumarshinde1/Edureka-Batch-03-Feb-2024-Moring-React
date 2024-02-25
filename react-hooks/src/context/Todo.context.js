// context ==> data

import { createContext, useContext, useReducer } from "react";

import { todoInitialState, todoReducer } from "./todo.reducer";

// create a context
let TodoContext = createContext();

// create provider (component) (sharable logic)
export const TodoContextProvider = (props) => {
  let { children } = props;
  let [state, dispatch] = useReducer(todoReducer, todoInitialState);

  let changeInput = (event) => {
    let action = {
      type: "CHANGE_INPUT",
      payload: event.target.value,
    };
    dispatch(action);
  };
  let saveTodo = () => {
    // let _todoList = [...todoList];
    // _todoList.push(input);
    // setTodoList(_todoList);
    // alert("Todo saved");
    let action = {
      type: "SAVE_TODO",
      payload: state.input,
    };
    dispatch(action);
    alert("Todo Saved");
  };

  const values = {
    input: state.input,
    todoList: state.todoList,
    changeInput,
    saveTodo,
  };
  return (
    <>
      <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    </>
  );
};

// create custom hook (consume context)
export const useTodoContext = () => {
  return useContext(TodoContext);
};
