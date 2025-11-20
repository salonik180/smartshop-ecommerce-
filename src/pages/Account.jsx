import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Sign In
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sign Up
  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate success
      alert("Welcome back! 🎉");
      navigate("/account");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && signUpEmail && signUpPassword) {
      alert(`Welcome ${name.split(" ")[0]}! Account created successfully 🎊`);
      setIsSignUp(false);
      setName(""); setSignUpEmail(""); setSignUpPassword("");
    }
  };

  return (
    <div className="login-page">
      <motion.div
        className="login-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="login-card">
          {/* Logo/Title */}
          <motion.div className="login-header" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <h1>ShopHub</h1>
            <p>{isSignUp ? "Join us today" : "Welcome back, shopper!"}</p>
          </motion.div>

          {/* Tabs */}
          <div className="login-tabs">
            <button
              className={!isSignUp ? "active" : ""}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
            <button
              className={isSignUp ? "active" : ""}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <motion.div
            key={isSignUp ? "signup" : "signin"}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {!isSignUp ? (
              <form onSubmit={handleSignIn} className="login-form">
                <div className="input-group">
                  <Mail className="icon" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <Lock className="icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-pass"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button type="submit" className="submit-btn">
                  Sign In <ArrowRight className="arrow" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignUp} className="login-form">
                <div className="input-group">
                  <User className="icon" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <Mail className="icon" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <Lock className="icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-pass"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button type="submit" className="submit-btn">
                  Create Account <ArrowRight className="arrow" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Google Sign In */}
          <button className="google-btn">
            Continue with Google
          </button>

          <p className="footer-text">
            {isSignUp ? "Already have an account?" : "New to ShopHub?"}{" "}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Sign In" : "Create an account"}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;