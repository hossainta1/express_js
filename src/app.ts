import express, { Application, NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRouter } from "./app/todos/todos.routes";
const app: Application = express();
app.use(express.json());

app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
 console.log("i am custom middleware")
 next()
  
},

(req: Request, res: Response) => {
  res.send("Welcome to todos App ");
  
}


);

export default app;
