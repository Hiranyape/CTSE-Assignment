import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8002/');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>Description: {product.desc}</p>
            <p>Price: ${product.price}</p>
            {/* Add more product details here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
