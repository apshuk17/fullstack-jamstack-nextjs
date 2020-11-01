import { useMemo, useEffect } from "react";
import List from "@material-ui/core/List";
import { Todo } from "../../../models/todo";
import TodoComponent from "../Todo/Todo.component";
import { useTodos } from "../../contexts/Todocontext";

interface TodosProps {
  todos: Todo[];
}

const Todos = ({ todos }: TodosProps) => {
  const { todos: contextTodos, setTodos, addTodo } = useTodos();
  console.log("##contextTodos", contextTodos);
  const todosToRender = useMemo(() => {
    if (contextTodos && contextTodos.length) return contextTodos;
    return todos;
  }, [todos, contextTodos]);

  return (
    <List dense>
      {todosToRender?.map((todo: Todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default Todos;
