import React from "react";
import { motion } from "framer-motion";
import "./CategoryBeauty.css";

const beautyProducts = [
  {
    id: 1,
    name: "Luxury Face Cream",
    price: 89.99,
    image: "https://images.pexels.com/photos/3762870/pexels-photo-3762870.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Organic Matte Lipstick Set",
    price: 49.99,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
    badge: "Hot",
  },
  {
    id: 3,
    name: "Floral Essence Eau de Parfum",
    price: 129.99,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
  },
  {
    id: 4,
    name: "Vitamin C Glow Serum",
    price: 74.99,
    image: "https://images.pexels.com/photos/5797993/pexels-photo-5797993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
    badge: "New",
  },
  {
    id: 5,
    name: "Deluxe Makeup Palette",
    price: 119.99,
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
    badge: "Limited",
  },
  {
    id: 6,
    name: "Hydrating Rose Hand Cream",
    price: 34.99,
    image: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
  },
];

const CategoryBeauty = () => {
  return (
    <div className="beauty-page">
      <motion.div
        className="beauty-header"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        <h1>Beauty & Personal Care</h1>
        <p>Indulge in luxury skincare, makeup & fragrances that make you glow</p>
      </motion.div>

      <div className="beauty-grid">
        {beautyProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="beauty-card"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              boxShadow: "0 30px 70px rgba(255, 105, 180, 0.3)",
            }}
          >
            {/* Glowing Badge */}
            {product.badge && (
              <motion.div 
                className={`beauty-badge ${product.badge.toLowerCase()}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product.badge}
              </motion.div>
            )}

            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              {/* Pulsing Quick Add Button */}
              <motion.div 
                className="quick-add"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  opacity: { duration: 2, repeat: Infinity }
                }}
              >
                <button>Add</button>
              </motion.div>
            </div>

            <div className="beauty-info">
              <h3>{product.name}</h3>
              <motion.p 
                className="price"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ${product.price.toFixed(2)}
              </motion.p>
              <motion.button 
                className="add-to-cart-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBeauty;