import express, { Request, Response } from "express";
import app from "../../app";
import fs from "fs";
import path from "path";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();

// Get all totos
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

// create todo
todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });
  // const data = req.body;
  // console.log(data);
  // const todos = collection.find({});
  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

// Get Single todo using id

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todo)
});

// Update todo 

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  

})
