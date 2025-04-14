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

  static async createTask(req, res) {
    try {
      const newTask = await Task.create(req.body);
      res.status(201).json({ message: "Tarefa criada com sucesso", newTask });
    } catch (error) {
      res.status(500).json({ message: `Falha ao criar tarefa - ${error}` });
    }
  }

  static async updateTask(req, res) {
    try {
      const id = req.params.id;
      const updatedTask = await Task.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .json({ message: "Tarefa atualizada com sucesso", updatedTask });
    } catch (error) {
      res.status(500).json({ message: `Falha ao atualizar tarefa - ${error}` });
    }
  }

  static async deleteTask(req, res) {
    try {
      const id = req.params.id;
      await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Tarefa atualizada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `Falha ao excluir tarefa - ${error}` });
    }
  }

  static async deleteTasks(req, res) {
    try {
      const idsArray = req.body;
      await Task.deleteMany({ _id: { $in: idsArray } });
      res.status(200).json({ message: "Tarefas excluídas com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao excluir as tarefas - ${error}` });
    }
  }
}

export default TaskController;
