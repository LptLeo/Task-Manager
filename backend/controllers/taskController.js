import Task from "../models/Task.js";

class TaskController {
  static async getTasks(req, res) {
    try {
      const taskList = await Task.find({});
      res
        .status(200)
        .json({ message: "Tarefas obtidas com sucesso", taskList });
    } catch (error) {
      res.status(500).json({ message: `Falha ao obter tarefas - ${error}` });
    }
  }

  static async sendTask(req, res) {
    try {
      const newTask = Task.create(req.body);
      res
        .status(201)
        .json({ message: "Tarefa criada com sucesso", Tarefa: newTask });
    } catch (error) {
      res.status(500).json({ message: `Falha ao criar tarefa - ${error}` });
    }
  }

  static async getTaskById(req, res) {
    try {
      const id = req.params.id;
      const listedTask = await Task.findById(id);
      res
        .status(200)
        .json({ message: "Tarefa obtida com sucesso", listedTask });
    } catch (error) {
      res.status(500).json({ message: `Falha ao obter tarefa - ${error}` });
    }
  }
}

export default TaskController;
