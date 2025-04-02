import React from "react";

const BrandPage = ({ onClose }) => {
  const handleBrandClick = (url) => {
    window.open(url, "_blank");
  };
  const listItemStyle = {
    cursor: "pointer",
  };
  return (
    <div className="overlay1">
      <div className="overlay-content1">
        <h1>Popular brands</h1>
        <ul>
        <li style={listItemStyle} onClick={() => handleBrandClick("https://www.samsung.com")}>Samsung</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.boat.com")}>Boat</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.jbl.com")}>JBL</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.sony.com")}>Sony</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.lg.com")}>Lg</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.gucci.com")}>Gucci</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.uspolo.com")}>U.S polo</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.peterengland.com")}>Peter England</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.realme.com")}>Realme</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.vivo.com")}>Vivo</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.motorola.com")}>Motorola</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.sketchers.com")}>Sketchers</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.one8.com")}>One 8</li>
          <li style={listItemStyle} onClick={() => handleBrandClick("https://www.Bata.com")}>Bata</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BrandPage;
