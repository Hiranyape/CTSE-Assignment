import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8002/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
    <Header></Header>
    <div className="container mt-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-5" style={{ height: "400px" }}>
            <img src={product.banner} className="card-img-top h-100" alt={product.name} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h1 className="card-title">{product.name}</h1>
              <p className="card-text fs-5">{product.desc}</p>
              <p className="card-text fs-5">Price: ${product.price}</p>
              <p className="card-text fs-5">Type: {product.type}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">
                <i className="bi bi-cart-fill me-2"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
