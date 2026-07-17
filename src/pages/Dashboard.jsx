import { Link, Outlet } from "react-router-dom";
import "../styles/Dashboard.css";
import {
  FaShoppingBag,
  FaHeart,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h1>My Dashboard</h1>

        <p>
          Manage your orders, wishlist, profile,
          and account settings.
        </p>

      </div>

      <div className="dashboard-cards">

        <Link to="orders" className="dashboard-card">

          <FaShoppingBag />

          <h3>Orders</h3>

        </Link>

        <Link to="wishlist" className="dashboard-card">

          <FaHeart />

          <h3>Wishlist</h3>

        </Link>

        <Link to="/profile" className="dashboard-card">

          <FaUserCircle />

          <h3>Profile</h3>

        </Link>

        <Link to="settings" className="dashboard-card">

          <FaCog />

          <h3>Settings</h3>

        </Link>

      </div>

      <div className="dashboard-content">

        <Outlet />

      </div>

    </div>
  );
}