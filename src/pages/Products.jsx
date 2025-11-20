import React from "react";
import "./Products.css";

const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=1000&fit=crop",
    },
    {
      id: 2,
      name: "Smartwatch Fitness Pro",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=1000&fit=crop",
    },
    {
      id: 3,
      name: "Luxury Leather Bag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    },
    {
      id: 4,
      name: "Modern LED Desk Lamp",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=1000&fit=crop",
    },
    {
      id: 5,
      name: "Polarized Sunglasses",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=1000&fit=crop",
    },
    {
      id: 6,
      name: "Eau de Parfum Premium",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=1000&fit=crop",
    },
    {
      id: 7,
      name: "MacBook Pro 16\" M3",
      price: 2499.00,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=1000&fit=crop",
    },
    {
      id: 8,
      name: "Ultra Boost Running Shoes",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop",
    },
    // FIXED: Two new gorgeous products with reliable images
    {
      id: 9,
      name: "Sony WH-1000XM5 Headphones",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=1000&fit=crop",
    },
    {
      id: 10,
      name: "iPhone 15 Pro Max",
      price: 1299.00,
      image: "https://images.unsplash.com/photo-1592899677979-761f1501e7a0?w=800&h=1000&fit=crop",
    },
  ];

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>All Products</h1>
        <p>Discover our premium collection – updated daily with the best deals</p>
      </div>

      <div className="products-grid">
        {productList.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="quick-add">
                <button>Add</button>
              </div>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;