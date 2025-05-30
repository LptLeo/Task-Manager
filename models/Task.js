import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date },
    lastUpdate: { type: Date },
  },
  { versionKey: false }
);

const Task = mongoose.model('Task', TaskSchema, 'tasks');

export default Task;
