import express, { Express } from "express";
import cors from "cors";
import { todoRouter } from "./routers";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(todoRouter);

export default app;
