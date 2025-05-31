import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todos App ");
});

app.get("/todos", (req: Request, res: Response) => {
  res.send("I am learning Express js with type script ");
});

export default app;
