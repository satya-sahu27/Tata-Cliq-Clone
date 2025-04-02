import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for the custom styles

const HomePage = () => {
  // Sample data for product categories
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://www.cnet.com/a/img/resize/8be8778c06445d7225b15add4ca126f093d663ab/hub/2022/11/14/cbefb0b8-20b7-4e5d-bcd7-2d3d7e61208b/soundpeats-air3-deluxe-hs-blue-background.png?auto=webp&fit=crop&height=1200&width=1200',
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://p.kindpng.com/picc/s/4-40720_transparent-fashion-models-png-fashion-man-jeans-png.png',
    },
    {
      id: 3,
      name: 'Home',
      image: 'https://imgeng.jagran.com/images/2023/jun/home%20decor%20cover%20img1685966482153.jpg',
    },
    {
      id: 4,
      name: 'Appliances',
      image: 'https://www.philips.co.in/c-dam/b2c/kitchen/en_in/airfryer-hero-product.png',
    },
  ];
  <h1>BLOCKBUSTER DEALS</h1>
  const deals = [
    {
      id: 1,
      // name: 'Electronics',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47915564761118.jpg',
    },
    {
      id: 2,
      // name: 'Fashion',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47915564695582.jpg',
    },
    {
      id: 3,
      // name: 'Home',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47915560304670.jpg',
    },
    {
      id: 4,
      // name: 'Appliances',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47915560697886.jpg',
    },
  ];
  <h1>THE WESTSIDE STORE</h1>
  const westside = [
    {
      id: 1,
      // name: 'Electronics',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47897408176158.jpg',
    },
    {
      id: 2,
      // name: 'Fashion',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47897408372766.jpg',
    },
    {
      id: 3,
      // name: 'Home',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47897408438302.jpg',
    },
    {
      id: 4,
      // name: 'Appliances',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47897408569374.jpg',
    },
  ];
  <h1>DEALS WHEEL</h1>
  const wheel = [
    {
      id: 1,
      // name: 'Electronics',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47923526631454.jpg',
    },
    {
      id: 2,
      // name: 'Fashion',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47923526696990.jpg',
    },
    {
      id: 3,
      // name: 'Home',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47915562500126.jpg',
    },
    {
      id: 4,
      // name: 'Appliances',
      image: 'https://assets.tatacliq.com/medias/sys_master/images/47884255035422.jpg',
    },
  ];
  return (
    <div className="homepage-container">
      <div className="header1">
        <h1>Welcome to Tata Cliq</h1>
        <p>Discover the best deals on electronics, fashion, home, and appliances.</p>
        <button>Shop Now</button>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link to={`/product/${category.id}`} key={category.id} className="category-card">
            {/* Wrap the image and name in the Link component */}
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
      <div className="category-grid">
        {deals.map((category) => (
          <Link to={`/product/${category.id}`} key={category.id} className="category-card">
            {/* Wrap the image and name in the Link component */}
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>

      <div className="category-grid">
        {wheel.map((category) => (
          <Link to={`/product/${category.id}`} key={category.id} className="category-card">
            {/* Wrap the image and name in the Link component */}
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
      <div className="category-grid">
        {westside.map((category) => (
          <Link to={`/product/${category.id}`} key={category.id} className="category-card">
            {/* Wrap the image and name in the Link component */}
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;