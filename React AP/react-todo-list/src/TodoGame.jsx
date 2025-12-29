import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoGame() {
  let [todos, setTodos] = useState([{ task: "Start", id: uuidv4() }]);
  let [newTask, setNewTask] = useState("");

  let addNewTask = () => {
    if (newTask.trim() === "") return; // empty task avoid karo
    setTodos([...todos, { task: newTask, id: uuidv4() }]); 
    setNewTask("");
  };

  let updateTodo = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <>
      <h3>TODO List App</h3>
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={updateTodo}
      />
      <br /><br />
      <button onClick={addNewTask}>Add Task</button>
      <br /><br />

      <hr /><hr />
      <h2>Your Tasks : </h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoGame;
