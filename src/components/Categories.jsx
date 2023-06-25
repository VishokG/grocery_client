import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from "../store/categorySlice";
import "../styles/categories.css";

const Categories = () => {

  
  const dispatch = useDispatch();

  return (
    <div className="categories-container center_flex">
        <div className="categories">
            <span className="category center_flex" onClick={() => dispatch(setCategory("ALL"))}>All Items</span>
            <span className="category center_flex" onClick={() => dispatch(setCategory("FRUITS"))}>Fruits</span>
            <span className="category center_flex" onClick={() => dispatch(setCategory("BAKERY"))}>Bakery</span>
            <span className="category center_flex" onClick={() => dispatch(setCategory("DRINKS"))}>Drinks</span>
        </div>
    </div>
  )
}

export default Categories;