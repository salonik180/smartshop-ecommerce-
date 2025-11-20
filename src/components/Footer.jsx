import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiGooglepay, SiApplepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* ===== Brand Section ===== */}
        <div className="footer-brand">
          <h2 className="brand-name">ShopSmart</h2>
          <p>Your trusted online store for the latest trends and quality products.</p>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/contact">Contact</a>
          </ul>
        </div>

        {/* ===== Support Section ===== */}
        <div className="footer-support">
          <h3>Support</h3>
          <ul>
            <a href="/faq">FAQs</a>
            <a href="/shipping">Shipping</a>
            <a href="/returns">Returns</a>
            <a href="/terms">Terms of Service</a>
          </ul>
        </div>

        {/* ===== Payment Methods ===== */}
        <div className="footer-payments">
          <h3>Payment Methods</h3>
          <div className="payment-icons">
            <SiVisa />
            <SiMastercard />
            <SiPaypal />
            <SiGooglepay />
            <SiApplepay />
          </div>
        </div>

        {/* ===== Social Media ===== */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* ===== Copyright ===== */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopSmart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
