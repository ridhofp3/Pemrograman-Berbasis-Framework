import React, { useState } from 'react';
import TodoDelete from './tododelete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask} style={{ marginLeft: '10px' }}>
        Tambah
      </button>
      <ul>
        {tasks.map((task, index) => (
          <TodoDelete key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
