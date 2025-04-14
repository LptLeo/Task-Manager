import express from "express";
import TaskController from "../controllers/taskController.js";

const routes = express.Router();

routes.get("/tasks", TaskController.getTasks);
routes.get("/tasks/:id", TaskController.getTaskById);
routes.post("/tasks", TaskController.createTask);
routes.put("/tasks/:id", TaskController.updateTask);
routes.delete("/tasks/", TaskController.deleteTasks);
routes.delete("/tasks/:id", TaskController.deleteTask);

export default routes;