import React from "react";
import Task from './Task'

function TaskList({tasks, removeTask,selectedCategory = 'All'}) {
  return (
    <div className="tasks">
      {tasks.filter(task =>{
        if(selectedCategory === 'All'){
          return task
        }
        else{
          return task.category === selectedCategory
        }
      })
      .map(task => <Task key={task.text} text={task.text} category={task.category} remove={removeTask}/>)}
    </div>
  );
}

export default TaskList;
