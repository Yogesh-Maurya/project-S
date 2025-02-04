import React, { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [formData, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <form
        className="signup-form"
        onSubmit={handleSubmit}
        aria-label="Signup Form"
      >
        <h2>Sign Up</h2>
        <p className="subheading">Sign up to continue</p>
        <div className="form-group">
          <i className="fas fa-user icon"></i>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <i className="fas fa-envelope icon"></i>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <i className="fas fa-lock icon"></i>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-login">
          <button className="social-button">
            <i className="fab fa-github"></i> GitHub
          </button>
          <button className="social-button">
            <i className="fas fa-envelope"></i> Email
          </button>
          <button className="social-button">
            <i className="fab fa-linkedin"></i> LinkedIn
          </button>
        </div>
        <div className="form-footer">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <p className="signin-link">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
