import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../../store/categorySlice";
import categories from "../../utils/constants"
import "../../styles/categories.css";

const Categories = () => {

  const dispatch = useDispatch();
  const currCategory = useSelector(state => state.category.value);

  //Function handles which category is currently selected and the styling of the categories
  //Every time a new category is selected, redux registers this change, styling from current category is removed 
  //and new category's styling is updated
  const handleClick = (e, newCategory) => {
    const previousId = `category_${currCategory.toUpperCase()}`;
    const newId = e.target.id;
    if(previousId !== newId) {

      //Styling
      document.getElementById(previousId).classList.remove("selected");
      document.getElementById(previousId).classList.add("unselected");
      document.getElementById(newId).classList.remove("unselected");
      document.getElementById(newId).classList.add("selected");
      
      //Redux
      dispatch(setCategory(newCategory));
    }
  }

  return (
    <div className="categories-container center_flex">
        <div className="categories">
            <span id="category_ALL" className="category selected center_flex" onClick={(e) => handleClick(e,categories.ALL)}>All Items</span>
            <span id="category_FRUIT" className="category unselected center_flex" onClick={(e) => handleClick(e,categories.FRUIT)}>Fruits</span>
            <span id="category_BAKERY" className="category unselected center_flex" onClick={(e) => handleClick(e,categories.BAKERY)}>Bakery</span>
            <span id="category_DRINKS" className="category unselected center_flex" onClick={(e) => handleClick(e,categories.DRINKS)}>Drinks</span>
        </div>
    </div>
  )
}

export default Categories;