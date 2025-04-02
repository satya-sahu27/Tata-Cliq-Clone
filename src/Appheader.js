import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./Appheader.css";
import CategoryPage from "./CategoryPage";
import BrandPage from "./BrandPage";
import "./overlay1.css";
import searchIcon from "./assets/icons/search-icon.svg";
import wishlistIcon from "./assets/icons/wishlist-icon.svg";
import cartIcon from "./assets/icons/cart-icon.svg";
import logoImage from "./assets/icons/logo.png";

const Appheader = () => {
  const location = useLocation();
  const showmenu =location.pathname !== "/login" && location.pathname !== "/register";
  const username = sessionStorage.getItem("username");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const usenavigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(!!username);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategoryPage, setShowCategoryPage] = useState(false);
  const [showBrandPage, setShowBrandPage] = useState(false);
  


  const toggleOverlay = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    setIsLoggedIn(false);
    usenavigate("/");
  };

  const toggleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
    setShowRegisterForm(false);
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm((prev) => !prev);
    setShowLoginForm(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
   
  };

  return (
    <div>
      {showmenu && (
        <div className="header">
           <div className="logo-section">
           <div className="logo-container">
              <img src={logoImage} alt="Logo" className="logo-image" />
            </div>
          </div>
          <div className="header-content">
          <div className="upper-section">
            <h6  style={{ color: "white" }}>Tata CLiQ Luxury</h6>
          
          <div className="header-buttons ml-auto">
          <div className="section-links">
          <Link to="/" style={{ color: "white" }}>Home</Link>
              <Link to="/cliq-cash">CLiQ Cash</Link>
              <Link to="/gift-card">Gift Card</Link>
              <Link to="/cliq-care">CLiQ Care</Link>
              <Link to="/track-order">Track Order</Link>
              

              <div className="spacer">
                <Link to="/about">Contact Us</Link>
              </div>
            </div>
                {username ? (
                  <>
                    <span style={{ color: "white" }}>Welcome <b>{username}</b></span>
                    <Link className="logout-link" onClick={handleLogout} style={{ color: "white" }}>Sign out</Link>
                    <div style={{ width: "200px" }} />
                  </>
                ) : (
                  <div>
                    <Link className="header-link" to="#" onClick={toggleLoginForm} style={{ color: "white" }}>Sign in</Link>
                    <span style={{ color: "white" }}>/</span>
                    <Link className="header-link" to="#" onClick={toggleRegisterForm} style={{ color: "white" }}>Sign up</Link>
                    <div style={{ width: "300px" }} />
                  </div>
                )}
              </div>
            </div>
          {/* Lower Section */}
          <div className="lower-section">
          <div className="header-links">
              <Link to="#" onClick={() => setShowCategoryPage(true)}>
                Categories
              </Link>
              <Link to="#" onClick={() => setShowBrandPage(true)}>
                Brands
              </Link>
            </div>
            <div className="header-search">
              {/* Search Bar */}
              <div className="search-box">
                <div className="search-icon">
                  <img src={searchIcon} alt="Search Icon" />
                </div>
                <input
                  type="text"
                  placeholder="Search for Products"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          
            <div className="header-icons">
              <div className="wishlist-icon">
                <Link to="/wishlist">
                  <img src={wishlistIcon} alt="Wishlist" />
                </Link>
              </div>
              <div className="cart-icon">
                <Link to="/Cart">
                  <img src={cartIcon} alt="Cart" />
                </Link>
              </div>
                 <div style={{ width: "200px" }} />
            </div>
          </div>
          </div>
        </div>
      )}
      {showLoginForm || showRegisterForm ? (
        <div className="overlay">
          {showLoginForm && <Login toggleRegisterForm={toggleRegisterForm} onLoginSuccess={handleLoginSuccess} toggleOverlay={toggleOverlay} />}
          {showRegisterForm && <Register toggleLoginForm={toggleLoginForm} toggleOverlay={toggleOverlay} />}
        </div>
      ) : null}
      {showCategoryPage && <CategoryPage onClose={() => setShowCategoryPage(false)} />}
      {showBrandPage && <BrandPage onClose={() => setShowBrandPage(false)} />}
    </div>
  );
};

export default Appheader;
