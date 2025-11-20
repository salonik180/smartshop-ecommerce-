import React from "react";
import { motion } from "framer-motion";
import "./CategoryFashion.css";

const fashionProducts = [
  {
    id: 1,
    name: "Men's Premium Leather Jacket",
    price: 289.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Floral Summer Maxi Dress",
    price: 89.99,
    image: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    price: 129.99,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 4,
    name: "Classic Gold Watch",
    price: 349.99,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    name: "Luxury Designer Handbag",
    price: 399.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "New",
  },
  {
    id: 6,
    name: "Polarized Aviator Sunglasses",
    price: 79.99,
    image: "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
];

const CategoryFashion = () => {
  return (
    <div className="fashion-page">
      <motion.div
        className="fashion-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Fashion & Style</h1>
        <p>Elevate your wardrobe with the latest trends and timeless pieces</p>
      </motion.div>

      <div className="fashion-grid">
        {fashionProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="fashion-card"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(0,0,0,0.22)" }}
          >
            {product.badge && (
              <div className={`fashion-badge ${product.badge.toLowerCase()}`}>
                {product.badge}
              </div>
            )}

            <div className="fashion-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="quick-add-overlay">
                <button className="quick-add-btn">Quick Add</button>
              </div>
            </div>

            <div className="fashion-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFashion;