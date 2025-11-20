import React from "react";
import { motion } from "framer-motion";
import "./CategoryHome.css";

const homeProducts = [
  {
    id: 1,
    name: "Nordic Linen Sofa",
    price: 899.00,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Solid Oak Dining Table",
    price: 1299.00,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    name: "King Size Platform Bed",
    price: 1499.00,
    image: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "New",
  },
  {
    id: 4,
    name: "Minimalist Bookshelf",
    price: 379.00,
    image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    name: "Architect Desk Lamp",
    price: 89.99,
    image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    name: "Marble Coffee Table",
    price: 499.00,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    badge: "Limited",
  },
];

const CategoryHome = () => {
  return (
    <div className="home-page">
      <motion.div
        className="home-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Home & Living</h1>
        <p>Create your dream space with timeless furniture and cozy decor</p>
      </motion.div>

      <div className="home-grid">
        {homeProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="home-card"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -16, boxShadow: "0 35px 70px rgba(0,0,0,0.18)" }}
          >
            {product.badge && (
              <div className={`home-badge ${product.badge.toLowerCase()}`}>
                {product.badge}
              </div>
            )}

            <div className="home-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="quick-add">
                <button className="quick-btn">Quick Add</button>
              </div>
            </div>

            <div className="home-info">
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

export default CategoryHome;