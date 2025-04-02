import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
