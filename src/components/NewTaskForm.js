import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState('Code')
  const [input, setInput] = useState('')

  const newItem = {
    text: input,
    category: selectedCategory
  }

  return (
    <form className="new-task-form" 
      onSubmit={e=>{
        e.preventDefault()
        onTaskFormSubmit(newItem)
      }}>
      <label>
        Details
        <input type="text" name="text" value={input} 
           onChange={e=>{
             e.preventDefault()
             setInput(e.target.value)}}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={e=>setSelectedCategory(e.target.value)}>
          {categories.map(category =><option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
