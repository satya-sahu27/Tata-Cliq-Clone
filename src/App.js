import './styles.css';
import React, { useState } from 'react';
import ProductDetails from './ProductDetails'; 
import Cart from './Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import About from './Abouts';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Boat Airpodes', price: 10 , Image: 'https://www.cnet.com/a/img/resize/8be8778c06445d7225b15add4ca126f093d663ab/hub/2022/11/14/cbefb0b8-20b7-4e5d-bcd7-2d3d7e61208b/soundpeats-air3-deluxe-hs-blue-background.png?auto=webp&fit=crop&height=1200&width=1200'},
    { id: 2, name: 'ZARA', price: 20 , Image: 'https://p.kindpng.com/picc/s/4-40720_transparent-fashion-models-png-fashion-man-jeans-png.png'},
    { id: 3, name: 'SOFA', price: 30 , Image: 'https://imgeng.jagran.com/images/2023/jun/home%20decor%20cover%20img1685966482153.jpg'},
    { id: 4, name: 'Air-Fryer', price: 50 , Image: 'https://www.philips.co.in/c-dam/b2c/kitchen/en_in/airfryer-hero-product.png'},
    { id: 5, name: 'LEVIS-Jacket', price: 24 , Image: 'https://assets.tatacliq.com/medias/sys_master/images/47915564761118.jpg'},
    { id: 6, name: 'U.S POLO-T-shirt', price: 100 , Image: 'https://assets.tatacliq.com/medias/sys_master/images/47915564695582.jpg'},
    { id: 7, name: 'PUMA SportsWear', price: 83 , Image: 'https://www.cnet.com/a/img/resize/8be8778c06445d7225b15add4ca126f093d663ab/hub/2022/11/14/cbefb0b8-20b7-4e5d-bcd7-2d3d7e61208b/soundpeats-air3-deluxe-hs-blue-background.png?auto=webp&fit=crop&height=1200&width=1200'},
    { id: 8, name: 'Being Human', price: 55 , Image: 'https://p.kindpng.com/picc/s/4-40720_transparent-fashion-models-png-fashion-man-jeans-png.png'},
    { id: 9, name: 'adidas Shoes', price: 38 , Image: 'https://imgeng.jagran.com/images/2023/jun/home%20decor%20cover%20img1685966482153.jpg'},
    { id: 10, name: 'TITAN Watch', price: 75 , Image: 'https://www.cnet.com/a/img/resize/8be8778c06445d7225b15add4ca126f093d663ab/hub/2022/11/14/cbefb0b8-20b7-4e5d-bcd7-2d3d7e61208b/soundpeats-air3-deluxe-hs-blue-background.png?auto=webp&fit=crop&height=1200&width=1200'},
    { id: 11, name: 'REDTAPE Shoes', price: 35 , Image: 'https://p.kindpng.com/picc/s/4-40720_transparent-fashion-models-png-fashion-man-jeans-png.png'},
    { id: 12, name: 'KURTA', price: 8 , Image: 'https://imgeng.jagran.com/images/2023/jun/home%20decor%20cover%20img1685966482153.jpg'},
    { id: 13, name: 'KURTA & KURTIS', price: 13 , Image: 'https://www.cnet.com/a/img/resize/8be8778c06445d7225b15add4ca126f093d663ab/hub/2022/11/14/cbefb0b8-20b7-4e5d-bcd7-2d3d7e61208b/soundpeats-air3-deluxe-hs-blue-background.png?auto=webp&fit=crop&height=1200&width=1200'},
    { id: 14, name: 'TOPS & TEES', price: 17 , Image: 'https://p.kindpng.com/picc/s/4-40720_transparent-fashion-models-png-fashion-man-jeans-png.png'},
    { id: 15, name: 'FROKS', price: 15 , Image: 'https://imgeng.jagran.com/images/2023/jun/home%20decor%20cover%20img1685966482153.jpg'},
  ];

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Appheader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} addToCart={addToCart} />}
          />
           <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
      <div className="app">
        <div className="products">
          {products.map((product) => (
            <product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
    </div>
  );
};

export default App;
