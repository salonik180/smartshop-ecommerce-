import React from "react";
import { motion } from "framer-motion";
import "./socialnavbar.css";
import { FaFacebook, FaInstagram, FaTwitter, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      
      {/* Left: Logo */}
      <div className="nav-logo">
        <h2>Shop<span>Smart</span></h2>
      </div>

      {/* Middle: Search Bar */}
      <div className="nav-search">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* Right: Social icons + Buttons */}
      <div className="nav-actions">

        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        <button className="signin-btn">Sign In</button>
        <button className="signup-btn">Sign Up</button>

        <div className="cart-icon">
          <FaShoppingCart />
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
