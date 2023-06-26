import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../store/categorySlice";
import categories from "../utils/constants"
import "../styles/categories.css";

const Categories = () => {

  const dispatch = useDispatch();
  const currCategory = useSelector(state => state.category.value);

  const handleClick = (e, newCategory) => {
    const previousId = `category_${currCategory.toUpperCase()}`;
    const newId = e.target.id;
    if(previousId !== newId) {
      document.getElementById(previousId).classList.remove("c2");
      document.getElementById(previousId).classList.add("c1");
      document.getElementById(newId).classList.remove("c1");
      document.getElementById(newId).classList.add("c2");
      
      dispatch(setCategory(newCategory));
    }
  }

  return (
    <div className="categories-container center_flex">
        <div className="categories">
            <span id="category_ALL" className="category c2 center_flex" onClick={(e) => handleClick(e,categories.ALL)}>All Items</span>
            <span id="category_FRUIT" className="category c1 center_flex" onClick={(e) => handleClick(e,categories.FRUIT)}>Fruits</span>
            <span id="category_BAKERY" className="category c1 center_flex" onClick={(e) => handleClick(e,categories.BAKERY)}>Bakery</span>
            <span id="category_DRINKS" className="category c1 center_flex" onClick={(e) => handleClick(e,categories.DRINKS)}>Drinks</span>
        </div>
    </div>
  )
}

export default Categories;