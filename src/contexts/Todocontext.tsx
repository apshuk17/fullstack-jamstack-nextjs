import { createContext, useContext, useState } from "react";
import fetch from "isomorphic-unfetch";

const TodosContext = createContext(null);

export const useTodos = () => useContext(TodosContext);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    try {
      const response = await fetch("/api/todos");
      const { todos } = await response.json();
      setTodos(todos);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async (description) => {
    try {
      const response = await fetch("/api/todos/createTodo", {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: { "Content-Type": "application/json" },
      });
      const newTodo = await response.json();
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch("/api/todos/deleteTodo", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      const {todo: deletedTodo} = await response.json();
      setTodos((prevTodos) => {
        const existingTodos = [...prevTodos];
        const existingTodoIndex = existingTodos.findIndex(
          (todo) => todo.id === deletedTodo.id
        );
        if (existingTodoIndex !== -1)
          existingTodos.splice(existingTodoIndex, 1);
        return existingTodos;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodo = async (updatedTodo) => {
    try {
      console.log("##updatedTodo", updatedTodo);
      const response = await fetch("/api/todos/updateTodo", {
        method: "PUT",
        body: JSON.stringify(updatedTodo),
        headers: { "Content-Type": "application/json" },
      });
      const {todo: newUpdatedTodo} = await response.json();
      setTodos((prevTodos) => {
        const existingTodos = [...prevTodos];
        const existingTodo = existingTodos.find(
          (todo) => todo.id === newUpdatedTodo.id
        );
        if (existingTodo) existingTodo.fields = newUpdatedTodo.fields;
        return existingTodos;
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, refreshTodos, updateTodo, deleteTodo, addTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
