import React from "react";
import { motion } from "framer-motion";
import "./CategoryElectronics.css";

const electronicsProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1299.00,
    image: "https://images.pexels.com/photos/14646107/pexels-photo-14646107.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "New",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    price: 399.99,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "MacBook Pro 16\" M3 Pro",
    price: 2499.00,
    image: "https://images.pexels.com/photos/18105058/pexels-photo-18105058/free-photo-of-macbook-pro-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    name: "Galaxy Watch 6 Classic",
    price: 399.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "Hot",
  },
  {
    id: 5,
    name: "JBL Flip 6 Speaker",
    price: 129.99,
    image: "https://images.pexels.com/photos/5637700/pexels-photo-5637700.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    name: "Sony ZV-1F Vlog Camera",
    price: 499.99,
    image: "https://images.pexels.com/photos/3756040/pexels-photo-3756040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "New",
  },
];

const CategoryElectronics = () => {
  return (
    <div className="electronics-page">
      <motion.div
        className="electronics-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Electronics & Gadgets</h1>
        <p>Discover cutting-edge technology and premium devices</p>
      </motion.div>

      <div className="electronics-grid">
        {electronicsProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="electronics-card"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
          >
            {product.badge && (
              <div className={`badge ${product.badge.toLowerCase().replace(" ", "-")}`}>
                {product.badge}
              </div>
            )}

            <div className="image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="quick-view">
                <button>Quick Add</button>
              </div>
            </div>

            <div className="product-info">
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

export default CategoryElectronics;