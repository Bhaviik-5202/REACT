import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["Simple List.."]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (editIndex === index) {
      setEditIndex(-1);
    }
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const saveEdit = () => {
    if (editValue.trim()) {
      const newTodos = [...todos];
      newTodos[editIndex] = editValue;
      setTodos(newTodos);
      setEditIndex(-1);
    }
  };

  const cancelEdit = () => {
    setEditIndex(-1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List App</h1>
      
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">Add Task</button>
      </div>

      <div className="stats">
        <p>Total tasks: {todos.length}</p>
      </div>

      <div className="todos-section">
        <h2>Your Tasks:</h2>
        {todos.length === 0 ? (
          <p className="empty-state">No tasks yet. Add some tasks to get started!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="edit-input"
                    />
                    <div className="edit-actions">
                      <button onClick={saveEdit} className="save-btn">Save</button>
                      <button onClick={cancelEdit} className="cancel-btn">Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="todo-text">{todo}</span>
                    <div className="todo-actions">
                      <button 
                        onClick={() => startEdit(index)} 
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteTask(index)} 
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <style jsx>{`
        .todo-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        
        .input-section {
          display: flex;
          margin-bottom: 20px;
          gap: 10px;
        }
        
        .task-input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .add-btn {
          padding: 12px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        
        .add-btn:hover {
          background-color: #45a049;
        }
        
        .stats {
          margin-bottom: 20px;
          text-align: center;
          color: #666;
        }
        
        .todos-section {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .todos-section h2 {
          margin-top: 0;
          color: #333;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        
        .empty-state {
          text-align: center;
          color: #888;
          font-style: italic;
        }
        
        .todo-list {
          list-style-type: none;
          padding: 0;
        }
        
        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border-bottom: 1px solid #eee;
          transition: background-color 0.2s;
        }
        
        .todo-item:hover {
          background-color: #f9f9f9;
        }
        
        .todo-text {
          flex: 1;
        }
        
        .todo-actions {
          display: flex;
          gap: 8px;
        }
        
        .edit-input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .edit-actions {
          display: flex;
          gap: 8px;
        }
        
        button {
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .edit-btn {
          background-color: #2196F3;
          color: white;
        }
        
        .edit-btn:hover {
          background-color: #0b7dda;
        }
        
        .delete-btn {
          background-color: #f44336;
          color: white;
        }
        
        .delete-btn:hover {
          background-color: #d32f2f;
        }
        
        .save-btn {
          background-color: #4CAF50;
          color: white;
        }
        
        .save-btn:hover {
          background-color: #45a049;
        }
        
        .cancel-btn {
          background-color: #9e9e9e;
          color: white;
        }
        
        .cancel-btn:hover {
          background-color: #757575;
        }
      `}</style>
    </div>
  );
}