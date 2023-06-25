import React from 'react';
import "../styles/productgrid.css";
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <div className="products-container center_flex">
        <div className="products-wrapper">
            <h3 className="trending-items">
                Trending Items
            </h3>
            <div className="products-grid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default ProductGrid;