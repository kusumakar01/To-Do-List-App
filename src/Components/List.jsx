import React, { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";

function List() {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  //const [edited, setEdited] = useState([]);

  function addTask(newTask) {
    if (newTask !== "") setTasks((prev) => [...prev, newTask]);
  }

  function updateTask(index, edited) {
    tasks[index] = edited;
    if (edited === "") removeTask(index);
    setTasks([...tasks]);
  }

  function removeTask(index) {
    const updatedDone = [];
    done.forEach((element) => {
      if (element > index) updatedDone.push(element - 1);
      else if (element < index) updatedDone.push(element);
    });
    setDone(updatedDone);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  function toggleDone(index) {
    const found = done.findIndex((element) => element === index);
    if (found === -1) setDone([...done, index]);
    else {
      done.splice(found, 1);
      setDone([...done]);
    }
  }

  return (
    <div className="container">
      <AddItem addTask={addTask} />

      <div className="item-list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            task={task}
            done={done}
            toggleDone={toggleDone}
            update={updateTask}
            remove={() => {
              removeTask(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default List;