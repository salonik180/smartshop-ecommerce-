import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "AirPods Max Pro",
      price: 549.99,
      category: "headphones",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 2,
      name: "Galaxy Watch Ultra",
      price: 449.99,
      category: "smartwatch",
      image: "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 3,
      name: "Sony ZV-1F Vlog Camera",
      price: 499.99,
      category: "camera",
      image: "https://images.pexels.com/photos/3756040/pexels-photo-3756040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 4,
      name: "Premium Leather Backpack",
      price: 189.99,
      category: "fashion",
      image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    // TWO NEW STUNNING PRODUCTS ADDED
    {
      id: 5,
      name: "iPhone 15 Pro Max",
      price: 1199.00,
      category: "smartphone",
      image: "https://images.pexels.com/photos/14646107/pexels-photo-14646107.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    },
    {
      id: 6,
      name: "MacBook Pro M3 Pro",
      price: 2399.00,
      category: "laptop",
      image: "https://images.pexels.com/photos/18105058/pexels-photo-18105058/free-photo-of-macbook-pro-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    }
  ];

  return (
    <div className="home">
      {/* HERO SECTION */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Elevate Your Shopping Experience
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover premium quality products with fast delivery and unbeatable prices.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="shop-btn"
              whileHover={{ scale: 1.08, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Trending Now</h2>
          <p>Most loved by our community this week</p>
        </motion.div>

        <div className="product-grid">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                <div className="badge">Hot</div>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="price-cart">
                  <span className="price">${product.price.toFixed(2)}</span>
                  <motion.button
                    className="add-to-cart-btn"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <h2>Join 500,000+ Happy Shoppers</h2>
          <p>
            Get <strong>15% OFF</strong> your first order + early access to flash sales
          </p>
          <motion.button
            className="signup-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Your Discount
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;