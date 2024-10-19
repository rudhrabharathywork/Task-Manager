import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate) {
      alert("Please enter a valid title and due date");
      return;
    }
    addTask(task);
    setTask({ title: "", description: "", dueDate: "", priority: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        maxHeight: "4rem",
        paddingTop: "1rem",
      }}
    >
      <TextField
        sx={{ minWidth: "250px" }}
        name="title"
        value={task.title}
        onChange={handleChange}
        label="Task Title"
        variant="outlined"
        required
        margin="normal"
      />
      <TextField
        sx={{ minWidth: "250px" }}
        name="description"
        value={task.description}
        onChange={handleChange}
        label="Task Description"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        sx={{ minWidth: "250px" }}
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleChange}
        margin="normal"
      />

      <FormControl sx={{ minWidth: "250px" }}>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          name="priority"
          value={task.priority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={[
          {
            minWidth: "150px",
            height: "3rem",
            color: "#fff",
            backgroundColor: "#1a57e6",
          },
          {
            "&:hover": {
              borderRadius: "3rem",
              transition: "ease-in-out",
              transitionDuration: ".2s",
            },
          },
        ]}
      >
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
