import { Request } from "express";
import {
  getTodosService,
  getTodoService,
  addTodoService,
  updateTodoService,
  deleteTodoService,
} from "../services/todo.service";

const getTodos = async (req: Request) => {
  try {
    return await getTodosService();
  } catch (error) {
    return error;
  }
};

const getTodo = async (req: Request) => {
  try {
    return await getTodoService(req);
  } catch (error) {
    return error;
  }
};

const addTodo = async (req: Request) => {
  try {
    return await addTodoService(req);
  } catch (error) {
    return error;
  }
};

const updateTodo = async (req: Request) => {
  try {
    return await updateTodoService(req);
  } catch (error) {
    return error;
  }
};

const deleteTodo = async (req: Request) => {
  try {
    return await deleteTodoService(req);
  } catch (error) {
    return error;
  }
};

export { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
