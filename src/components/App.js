import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [taskList, setTaskList] = useState(TASKS)

  function handleCategorySelection(e){
    setSelectedCategory(e.target.textContent)
  }

  function onTaskFormSubmit(item){
    const newItem = [...taskList, item]
    setTaskList(newItem)
  }

  function removeTask(item){
    const newTasks = taskList.filter(task => task.text !== item)
    setTaskList(newTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={handleCategorySelection} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} selectedCategory={selectedCategory} removeTask={removeTask}/>
    </div>
  );
}

export default App;
