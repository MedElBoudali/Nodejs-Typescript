import { RequestHandler } from 'express';
import { todo } from '../models/todo';

const todos: todo[] = [];

// @Get All Todos
export const allTodos: RequestHandler = (req, res, next) => {
  res.json({ todos });
};

// @Add New Todo
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new todo(Math.random().toString(), text);
  todos.push(newTodo);
  res.status(201).json({ message: 'Todo created.', createdTodo: newTodo });
};

// @Edit Todo
export const editTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const newText = (req.body as { text: string }).text;
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex < 0) throw new Error('Could not find todo!');
  todos[todoIndex] = new todo(todos[todoIndex].id, newText);
  res.json({ message: 'Todo Updated!', updatedTodo: todos[todoIndex] });
};

// @Remove Todo
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex < 0) throw new Error('Could not find todo!');
  const todoRemoved = todos.splice(todoIndex, 1);
  res.json({ message: 'Todo removed!', removededTodo: todoRemoved });
};
