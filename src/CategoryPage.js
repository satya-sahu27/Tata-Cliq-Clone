import React from "react";

const CategoryPage = ({ onClose }) => {
  return (
    <div className="overlay1">
        <div className="overlay-content1">
        <h1>Category Page</h1>
        <div className="category-list">
          <div className="category-item">Women's Fashion</div>
          <hr className="category-divider" />
          <div className="category-item">Men's Fashion</div>
          <hr className="category-divider" />
          <div className="category-item">Kid's Fashion</div>
          <hr className="category-divider" />
          <div className="category-item">Home & Kitchen</div>
          <hr className="category-divider" />
          <div className="category-item">Beauty</div>
          <hr className="category-divider" />
          <div className="category-item">Gadgets</div>
          <hr className="category-divider" />
          <div className="category-item">Jewellery</div>
          <hr className="category-divider" />
          <div className="category-item">Accessories</div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CategoryPage;
