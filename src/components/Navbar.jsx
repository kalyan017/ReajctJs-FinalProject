import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import {FaShoppingBag , FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
      <h2>🛒 EasyBuy</h2>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search products" />
        </div>

        <NavLink to="/cart">
          <FaShoppingCart /> Cart
        </NavLink>

        <NavLink to="/profile">
          <FaUser /> Profile
        </NavLink>
      </div>

    </nav>
  );
}