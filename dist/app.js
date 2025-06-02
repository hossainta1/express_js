"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./app/todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.todosRouter);
app.get("/", (req, res, next) => {
    console.log("i am custom middleware");
    next();
}, (req, res) => {
    res.send("Welcome to todos App ");
});
exports.default = app;
