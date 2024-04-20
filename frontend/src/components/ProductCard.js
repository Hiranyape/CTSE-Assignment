// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img src={product.banner} className="card-img-top" alt={product.name} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.desc}</p>
        <p className="card-text">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
