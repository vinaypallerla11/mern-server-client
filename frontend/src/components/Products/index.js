import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import Navbar from '../NavBar'
import './index.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
    <Navbar/>
    <div className="products-container">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default Products;
