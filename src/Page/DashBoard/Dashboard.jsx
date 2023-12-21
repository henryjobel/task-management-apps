// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Example state for task list
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Project', status: 'todo' },
    { id: 2, title: 'Review Code', status: 'ongoing' },
    { id: 3, title: 'Submit Report', status: 'completed' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 bg-blue-500">
        <Link to="/" className="mr-4 text-white">Home</Link>
        <Link to="/dashboard" className="text-white">Dashboard</Link>
        {/* Add other routes as needed */}
      </nav>
      <div className="max-w-3xl p-8 mx-auto mt-16 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Task Management Dashboard</h2>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-bold">Profile Section</h3>
          {/* Your profile section components go here */}
          <div>
            {/* Display user profile information */}
            {/* Add an image, username, etc. */}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Task Lists</h3>
          {/* Your task list components go here */}
          <div className="grid grid-cols-3 gap-4">
            {/* To-Do List */}
            <div className="p-4 bg-gray-200 rounded">
              <h4 className="mb-2 font-bold text-md">To-Do</h4>
              {/* Display tasks in the "To-Do" list */}
              {tasks
                .filter(task => task.status === 'todo')
                .map(task => (
                  <div key={task.id} className="p-2 mb-2 bg-white rounded">
                    {task.title}
                  </div>
                ))}
            </div>
            {/* Ongoing List */}
            <div className="p-4 bg-gray-200 rounded">
              <h4 className="mb-2 font-bold text-md">Ongoing</h4>
              {/* Display tasks in the "Ongoing" list */}
              {tasks
                .filter(task => task.status === 'ongoing')
                .map(task => (
                  <div key={task.id} className="p-2 mb-2 bg-white rounded">
                    {task.title}
                  </div>
                ))}
            </div>
            {/* Completed List */}
            <div className="p-4 bg-gray-200 rounded">
              <h4 className="mb-2 font-bold text-md">Completed</h4>
              {/* Display tasks in the "Completed" list */}
              {tasks
                .filter(task => task.status === 'completed')
                .map(task => (
                  <div key={task.id} className="p-2 mb-2 bg-white rounded">
                    {task.title}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
