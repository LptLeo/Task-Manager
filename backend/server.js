import express from "express";
import cors from 'cors';
import connectToDataBase from "./src/config/dbConnect.js";
import Task from "./models/Task.js";
import routes from "./routes/index.js";

const server = express();
server.use(cors());
routes(server);

const connection = await connectToDataBase();

connection.on("error", (err) => {
  console.error("Erro de conexão: " + err);
});

connection.once("open", () => {
  console.log("Conexão com Mongo Atlas estabelecida.");
});

const PORT = 3001;

server.get("/", (req, res) => {
  res.status(200).send("Sucesso ao conectar-se.");
});

server.get("/tasks", async (req, res) => {
  const taskList = await Task.find({});
  res.status(200).json(taskList);
});

server.listen(PORT, (req, res) => {
  console.log("Servidor escutando...");
});
