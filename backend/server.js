import express from "express";
import connectToDataBase from "./src/config/dbConnect.js";

const connection = await connectToDataBase();

connection.on("error", (err) => {
  console.error("Erro de conexão: " + err);
});

connection.once("open", () => {
  console.log("Conexão com Mongo Atlas estabelecida.")
})

const PORT = 3000;

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("Sucesso ao conectar-se.");
});

server.listen(PORT, (req, res) => {
  console.log("Servidor escutando...");
});
