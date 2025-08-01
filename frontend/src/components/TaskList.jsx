import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) return <p className="mt-3">No tasks added yet.</p>;

  return (
    <ul className="list-group mt-4">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
          <div className="me-auto">
            <div className="fw-bold">{task.task}</div>
            <small>
              Due: {task.dueDate || "N/A"} | Priority:{" "}
              <span className={`badge bg-${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </small>
          </div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "danger";
    case "Medium":
      return "warning";
    default:
      return "secondary";
  }
};

export default TaskList;
