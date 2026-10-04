"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          TODO APPLICATION
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Add Task
          </button>
        </div>

        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet.
            </p>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span>{item.text}</span>
                </div>

                <button className="text-red-600">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}