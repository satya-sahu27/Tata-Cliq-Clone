import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id);
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.Image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {showMessage && (
        <div style={{ color: 'green' }}>Item added to cart successfully</div>
      )}
      {/* Add more details about the product */}
    </div>
  );
};

export default ProductDetails;
