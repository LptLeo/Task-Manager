import express from "express";
import TaskController from "../controllers/taskController.js";

const routes = express.Router();

routes.get("/tasks", TaskController.getTasks);
routes.get("/tasks/:id", TaskController.getTaskById);
routes.post("/tasks", TaskController.sendTask);

export default routes;