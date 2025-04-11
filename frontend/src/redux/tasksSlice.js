import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/tasks";

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  const res = await axios.get(API_URL);
  return res.data.taskList;
});

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (newTask) => {
    const res = await axios.post(API_URL, newTask);
    return res.data.newTask;
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updatedData }) => {
    await axios.put(`${API_URL}/${id}`, updatedData);
    return { ...updatedData, _id: id };
  }
);

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.tasksData = payload;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.tasksData.push(payload);
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.tasksData = state.tasksData.map((task) =>
          task._id === payload._id ? payload : task
        );
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.tasksData = state.tasksData.filter(
          (item) => item._id !== payload
        );
      });
  },
});

export default tasksSlice.reducer;
