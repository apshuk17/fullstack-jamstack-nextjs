import { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { Todo } from "../../../models/todo";
import { useTodos } from "../../contexts/Todocontext";

interface TodoProps {
  todo: Todo;
}

const TodoComponent = ({ todo }: TodoProps) => {
  const {
    id,
    fields: { description, completed },
  } = todo;
  const labelId = `checkbox-list-secondary-label-${id}`;

  const { updateTodo, deleteTodo } = useTodos();

  const handleCheckboxToggle = async () => {
    const updatedFields = {
      ...todo.fields,
      completed: !completed,
    };
    await updateTodo({ id: todo.id, fields: updatedFields });
  };

  const handleDelete = async () => {
    const { id } = todo;
    await deleteTodo(id);
  };

  return (
    <ListItem
      key={id}
      role={undefined}
      dense
      button
      onClick={handleCheckboxToggle}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          color="primary"
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`${description}`} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleDelete} edge="end" aria-label="delete">
          <DeleteIcon color="primary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoComponent;
