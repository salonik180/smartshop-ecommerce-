import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Premium Leather Jacket",
      price: 299.99,
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 2,
      name: "Galaxy Watch 6 Classic",
      price: 399.99,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 3,
      name: "Minimalist Coffee Table",
      price: 189.99,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: 399.99,
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      price: 159.99,
      image: "https://images.pexels.com/photos/1456707/pexels-photo-1456707.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
  ]);

  const [addedToCart, setAddedToCart] = useState({});

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleAddToCart = (id) => {
    setAddedToCart((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="wishlist-container">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Wishlist
        <span className="wishlist-count">{wishlist.length}</span>
      </motion.h1>

      {wishlist.length === 0 ? (
        <motion.div
          className="empty-wishlist"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/3948070/pexels-photo-3948070.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Empty wishlist"
            className="empty-img"
          />
          <h2>Your wishlist is feeling lonely</h2>
          <p>Add items you love and save them for later!</p>
        </motion.div>
      ) : (
        <motion.div className="wishlist-grid">
          <AnimatePresence>
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                className="wishlist-card"
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -300, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              >
                <div className="image-wrapper">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <motion.button
                    className="heart-btn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Heart
                  </motion.button>
                </div>

                <div className="wishlist-info">
                  <h3>{item.name}</h3>
                  <p className="price">${item.price.toFixed(2)}</p>

                  <div className="wishlist-actions">
                    <motion.button
                      className="add-to-cart"
                      onClick={() => handleAddToCart(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {addedToCart[item.id] ? "Added!" : "Add to Cart"}
                    </motion.button>

                    <motion.button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Remove
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Wishlist;