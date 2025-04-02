import axios from "axios";

async function getTaskList() {
  try {
    const res = await axios.get("http://localhost:3001/api/tasks");
    return res.data;
  } catch (error) {
    console.error("Erro ao obter a lista de tarefas:", error);
    return null;
  }
}

export default getTaskList;
