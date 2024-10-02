import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import "../assets/styles/App.css"
import { useNavigate } from 'react-router-dom';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
        }
    }, [navigate]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </>
  );
};

export default TaskManager;