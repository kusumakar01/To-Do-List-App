import { useState } from "react";

function AddItem(props) {

  const [newTask, setNewTask] = useState("");
  function handleChange(event) {
    const input = event.target.value;
    setNewTask(input);
  }

  return (
    <div className="add-item">
      <input
        value={newTask}
        type="text"
        placeholder="What would you like to do?"
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.addTask(newTask);
            setNewTask("");
          }
        }}
        autoFocus
      />
      <button
        onClick={() => {
          props.addTask(newTask);
          setNewTask("");
        }}
      >
        Add to List
      </button>
    </div>
  );
}

export default AddItem;