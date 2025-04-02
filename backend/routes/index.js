import express from "express";
import tasks from "./tasksRoutes.js";

const routes = (server) => {
  server.route("/api").get((req, res) => res.status(200).send("api/tasks\n"));
  server.use(express.json());
  server.use("/api", tasks);
};

export default routes;
