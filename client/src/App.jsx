import React from 'react';
import "./assets/styles/App.css"
import Login from "./pages/Login"
import TaskManager from './pages/TaskManager';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/taskmanager" element={<TaskManager />} />
          </Routes>
      </Router>
  );
}

export default App;
