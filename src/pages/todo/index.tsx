// import NavBar from "../../components/NavBar/Navbar.component";
import { useEffect, useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { GetServerSidePropsContext } from "next";
import fetch from "isomorphic-unfetch";

import { Todo } from "../../../models/todo";
import TodosComponent from "../../components/Todos/Todos.component";
import { todoTable, getMinifyRecords } from "../../../utils/Airtable";
import { useTodos } from "../../contexts/Todocontext";

export interface TodoProps {
  initialTodos: Todo[];
  error?: string;
}

const todo = ({ initialTodos }: TodoProps) => {
  const { todos, setTodos } = useTodos();

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography align="center" component="h1" variant="h3">
        Todo App
      </Typography>
      <TodosComponent todos={initialTodos} />
    </Container>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const response = await fetch("http://localhost:3000/api/todos");
    const { todos } = await response.json();
    return {
      props: {
        initialTodos: todos,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default todo;
