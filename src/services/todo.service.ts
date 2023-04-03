import { Request } from "express";
import pool from "../db";

const getTodosService = async () => {
  try {
    return await pool.query("SELECT * FROM todo");
  } catch (error) {
    return error;
  }
};

const getTodoService = async (req: Request) => {
  try {
    const { id } = req.params;
    return await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  } catch (error) {
    return error;
  }
};

const addTodoService = async (req: Request) => {
  try {
    const { description } = req.body;
    return await pool.query("INSERT INTO todo (description) VALUES($1)", [
      description,
    ]);
  } catch (error) {
    return error;
  }
};

const updateTodoService = async (req: Request) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    return await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
  } catch (error) {
    return error;
  }
};

const deleteTodoService = async (req: Request) => {
  try {
    const { id } = req.params;
    return await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  } catch (error) {
    return error;
  }
};

export { getTodosService, getTodoService, addTodoService, updateTodoService, deleteTodoService };
