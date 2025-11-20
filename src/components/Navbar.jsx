import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // <-- Import your logo

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="ShopEase Logo" className="logo-img" />
        </Link>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>

          {/* Categories Dropdown */}
          <li className="dropdown">
            <span className="drop-btn">Categories ▼</span>
            <ul className="dropdown-menu">
              <li><Link to="/category/electronics">Electronics</Link></li>
              <li><Link to="/category/fashion">Fashion</Link></li>
              <li><Link to="/category/home">Home & Furniture</Link></li>
              <li><Link to="/category/beauty">Beauty</Link></li>
            </ul>
          </li>

          <li><Link to="/deals">Deals</Link></li>
        </ul>

        {/* Wishlist */}
        <div className="wishlist">
          <Link to="/wishlist">♥</Link>
        </div>

        {/* Account */}
        <div className="account">
          <Link to="/account">👤</Link>
        </div>

        {/* Cart */}
        <div className="cart">
          <Link to="/cart">
            🛒 <span className="cart-count">3</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="mobile-links">
          <li><Link to="/" onClick={() => setMobileMenu(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setMobileMenu(false)}>Shop</Link></li>
          <li><Link to="/deals" onClick={() => setMobileMenu(false)}>Deals</Link></li>

          {/* Mobile Categories */}
          <li><Link to="/category/electronics" onClick={() => setMobileMenu(false)}>Electronics</Link></li>
          <li><Link to="/category/fashion" onClick={() => setMobileMenu(false)}>Fashion</Link></li>
          <li><Link to="/category/home" onClick={() => setMobileMenu(false)}>Home & Furniture</Link></li>
          <li><Link to="/category/beauty" onClick={() => setMobileMenu(false)}>Beauty</Link></li>

          <li><Link to="/wishlist" onClick={() => setMobileMenu(false)}>Wishlist</Link></li>
          <li><Link to="/account" onClick={() => setMobileMenu(false)}>Account</Link></li>
          <li><Link to="/cart" onClick={() => setMobileMenu(false)}>Cart</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
