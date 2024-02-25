export let todoInitialState = {
  input: "",
  todoList: [],
};
// action ==> type
// action ==> payload
export const todoReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "CHANGE_INPUT":
      return { ...state, input: payload };

    case "SAVE_TODO":
      return { todoList: [...state.todoList, payload], input: "" };
    default:
      return { ...state };
  }
};
