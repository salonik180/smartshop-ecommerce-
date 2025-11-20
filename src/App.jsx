import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

import Home from "./pages/Home";
import Products from "./pages/Products";
import Deals from "./pages/Deals";

import CategoryFashion from "./pages/CategoryFashion.jsx";
import CategoryHome from "./pages/CategoryHome.jsx";
import CategoryBeauty from "./pages/CategoryBeauty.jsx";
import CategoryElectronics from "./pages/CategoryElectronics.jsx";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deals" element={<Deals />} />

        <Route path="/category/fashion" element={<CategoryFashion />} />
        <Route path="/category/home" element={<CategoryHome />} />
        <Route path="/category/beauty" element={<CategoryBeauty />} />
        <Route path="/category/electronics" element={<CategoryElectronics />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />  {/* <-- Footer added here */}
    </Router>
  );
}

export default App;
