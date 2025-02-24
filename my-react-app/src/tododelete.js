import React from 'react';

function TodoDelete({ task, onDelete }) {
  return (
    <li>
      {task} 
      <button onClick={onDelete} style={{ marginLeft: '10px', color: 'red' }}>
        Hapus
      </button>
    </li>
  );
}

export default TodoDelete;
