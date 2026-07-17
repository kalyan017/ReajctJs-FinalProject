import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaShoppingBag, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useSearchParams, useNavigate } from "react-router-dom";


export default function Navbar() {
  const [search, setSearch] = useState("");
  const { cartItems } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const navigate = useNavigate();
  const handleSearch = (e) => {

    const value = e.target.value;


    if (value) {

      setSearchParams({
        search: value,
        page: 1
      });

    }
    else {

      setSearchParams({
        page: 1
      });

    }


    navigate("/products");

  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
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

          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => {

              setSearch(e.target.value);
              

            }}

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                navigate(
                  `/products?search=${search}&page=1`
                );

              }

            }}

          />

        </div>
        <NavLink to="/cart" className="cart-link">

          <FaShoppingCart />

          Cart

          {totalItems > 0 && (
            <span className="cart-badge">
              {totalItems}
            </span>
          )}

        </NavLink>

        <NavLink to="/profile">
          <FaUser /> Profile
        </NavLink>
      </div>

    </nav>
  );
}