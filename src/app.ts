import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();
app.use(express.json());

const todosRouter = express.Router();
app.use("/todos", todosRouter);

todosRouter.get("/all-todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  res.json({
    message: "From todos router",
    data: JSON.parse(data),
  });
});

const filePath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todos App ");
});

app.get("/todos", (req: Request, res: Response) => {
  // console.log(req.query);
  console.log(req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  console.log(data);
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("Hellow Prisma");
});

export default app;
