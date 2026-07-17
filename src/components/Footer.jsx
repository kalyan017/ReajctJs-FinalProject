import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-section">
          <h2>EasyBuy</h2>
          <p>
            Your one-stop destination for quality products at affordable prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>

          <ul>
            <li>Email: support@easybuy.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <hr />

      <div className="copyright">
        <p>© 2026 EasyBuy. All Rights Reserved.</p>
      </div>

    </footer>
  );
}