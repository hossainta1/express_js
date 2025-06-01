"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
app.use("/todos", todosRouter);
todosRouter.get("/all-todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    res.json({
        message: "From todos router",
        data: JSON.parse(data),
    });
});
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    res.send("Welcome to todos App ");
});
app.get("/todos", (req, res) => {
    // console.log(req.query);
    console.log(req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    console.log(data);
    res.json(data);
});
app.post("/todos/create-todo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Hellow Prisma");
});
exports.default = app;
