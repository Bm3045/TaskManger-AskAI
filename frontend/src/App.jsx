import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AskAI from "./components/AskAI";
import Hero from "./components/Hero";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, i) => i !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <Header />
      <Hero />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <AskAI />
    </div>
  );
}

export default App;
