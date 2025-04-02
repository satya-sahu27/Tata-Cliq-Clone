import React from 'react';
import "./cart.css"

const Cart = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.Image} alt={item.name} style={{ width: '50px' }} />
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total Price: ${getTotalPrice()}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
