import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/productgrid.css";
import ProductCard from './ProductCard';

const ProductGrid = () => {

  const category = useSelector(state => state.category.value);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${category}`);
      const json = await res.json();
      setData(json);
    }

    getData();
  }, [category]);

  return (
    <div className="products-container center_flex">
        <div className="products-wrapper">
            <h3 className="trending-items">
                Trending Items
            </h3>
            <div className="products-grid">
              {data.map(val => <ProductCard values={val} key={val.id} />)}
            </div>
        </div>
    </div>
  )
}

export default ProductGrid;