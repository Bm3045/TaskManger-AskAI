import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTask({ task, dueDate, priority, done: false });
    setTask("");
    setDueDate("");
    setPriority("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded shadow-sm p-4"
    >
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6 mb-2 mb-md-0">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
