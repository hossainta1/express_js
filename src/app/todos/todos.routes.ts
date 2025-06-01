import express, { Request, Response } from "express";
import app from "../../app";
import fs from "fs";
import path from "path";

export const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  res.json({
    message: "From todos router",
    data: JSON.parse(data),
  });
});


todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("Hellow Prisma");
});
