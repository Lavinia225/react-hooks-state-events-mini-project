import React from "react";

function CategoryFilter({categories, selectCategory, selectedCategory}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={selectCategory} 
        className={selectedCategory === category ? 'selected' : null}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
