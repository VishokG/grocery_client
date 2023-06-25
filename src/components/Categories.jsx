import React from 'react';
import "../styles/categories.css";

const Categories = () => {
  return (
    <div className="categories-container center_flex">
        <div className="categories">
            <span className="category center_flex">All Items</span>
            <span className="category center_flex">Drinks</span>
            <span className="category center_flex">Fruits</span>
            <span className="category center_flex">Bakery</span>
        </div>
    </div>
  )
}

export default Categories;