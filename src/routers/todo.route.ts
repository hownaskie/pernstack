import { Router, Request, Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers";

const todoRouter: Router = Router();

todoRouter.get("/todos", async (req: Request, res: Response) => {
  try {
    const todos: any = await getTodos(req);
    res.status(StatusCodes.OK).send(todos.rows);
  } catch (error) {
    return error;
  }
});

todoRouter.get("/todos/:id", async (req: Request, res: Response) => {
  try {
    const todo: any = await getTodo(req);
    res.status(StatusCodes.OK).send(todo.rows[0]);
  } catch (error) {}
});

todoRouter.post("/todos", async (req: Request, res: Response) => {
  try {
    const newTodo: any = await addTodo(req);
    res
      .status(StatusCodes.CREATED)
      .send({
        message: getReasonPhrase(
          newTodo.rowCount ? StatusCodes.CREATED : StatusCodes.BAD_REQUEST
        ),
      });
  } catch (error) {
    return error;
  }
});

todoRouter.put("/todos/:id", async (req: Request, res: Response) => {
  try {
    const todo: any = await updateTodo(req);
    res
      .status(todo.rowCount ? StatusCodes.OK : StatusCodes.BAD_REQUEST)
      .send({
        message: getReasonPhrase(
          todo.rowCount ? StatusCodes.OK : StatusCodes.BAD_REQUEST
        ),
      });
  } catch (error) {
    return error;
  }
});

todoRouter.delete("/todos/:id", async (req: Request, res: Response) => {
  try {
    const todo: any = await deleteTodo(req);
    res
      .status(todo.rowCount ? StatusCodes.OK : StatusCodes.BAD_REQUEST)
      .send({
        message: getReasonPhrase(
          todo.rowCount ? StatusCodes.OK : StatusCodes.BAD_REQUEST
        ),
      });
  } catch (error) {
    return error;
  }
});

export default todoRouter;
