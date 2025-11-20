import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "AirPods Max Pro",
      price: 549.99,
      quantity: 1,
      img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Galaxy Watch Ultra",
      price: 399.99,
      quantity: 1,
      img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      price: 179.99,
      quantity: 2,
      img: "https://images.pexels.com/photos/1456707/pexels-photo-1456707.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromo = () => {
    if (promoCode.toLowerCase() === "save20") {
      setDiscount(20);
      alert("Promo code applied! 20% OFF");
    } else {
      alert("Invalid promo code");
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal - discountAmount + tax;

  return (
    <div className="cart-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="cart-container"
      >
        <h1>Your Cart ({cartItems.length} items)</h1>

        {cartItems.length === 0 ? (
          <motion.div className="empty-cart" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <img
              src="https://images.pexels.com/photos/3948070/pexels-photo-3948070.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Empty cart"
            />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet. Let's fix that!</p>
            <button className="continue-shopping">Continue Shopping</button>
          </motion.div>
        ) : (
          <div className="cart-content">
            {/* Cart Items */}
            <div className="cart-items">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="cart-item-card"
                  >
                    <img src={item.img} alt={item.name} />

                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="price">${item.price.toFixed(2)}</p>

                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>

                      <p className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      className="remove-item"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Discount ({discount}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-total">
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>

              <div className="promo-section">
                <input
                  type="text"
                  placeholder="Promo code (try: SAVE20)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={applyPromo}>Apply</button>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

              <button className="continue-shopping-btn">
                ← Continue Shopping
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;