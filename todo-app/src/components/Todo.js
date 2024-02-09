import { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Link, Outlet } from "react-router-dom";

const Todo = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <Link to="/todo/input">Add Todo</Link>
        </li>
        <li>
          <Link to="/todo/list">Todo List</Link>
        </li>
      </ul>
      <h1 className="text-center">Todo Application</h1>

      <Outlet />
    </>
  );
};

export default Todo;
