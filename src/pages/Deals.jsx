import React from "react";
import "./Deals.css";

// Sample deals data with real, smart images
const dealsList = [
  {
    id: 1,
    name: "Wireless Headphones",
    originalPrice: 99.99,
    dealPrice: 59.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    discount: "40% OFF",
  },
  {
    id: 2,
    name: "Smartwatch",
    originalPrice: 149.99,
    dealPrice: 99.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    discount: "33% OFF",
  },
  {
    id: 3,
    name: "Running Shoes",
    originalPrice: 99.99,
    dealPrice: 69.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    discount: "30% OFF",
  },
  {
    id: 4,
    name: "LED Lamp",
    originalPrice: 49.99,
    dealPrice: 29.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop",
    discount: "40% OFF",
  },
  {
    id: 5,
    name: "Laptop",
    originalPrice: 599.99,
    dealPrice: 499.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
    discount: "17% OFF",
  },
];

const Deals = () => {
  return (
    <div className="deals-container">
      <header className="deals-header">
        <h1>🔥 Hot Deals & Offers</h1>
        <p>Grab the best discounts before they're gone!</p>
      </header>

      {/* Featured Deal Banner */}
      <div className="featured-deal">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=600&fit=crop"
          alt="Featured Deal"
        />
        <div className="featured-text">
          <h2>Limited Time Mega Sale!</h2>
          <p>Up to 50% off on selected electronics</p>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="deals-grid">
        {dealsList.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <div className="deal-badge">{deal.discount}</div>
            <img src={deal.image} alt={deal.name} loading="lazy" />
            <h3>{deal.name}</h3>
            <p>
              <span className="original-price">${deal.originalPrice.toFixed(2)}</span>{" "}
              <span className="deal-price">${deal.dealPrice.toFixed(2)}</span>
            </p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;