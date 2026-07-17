import { Link } from "react-router-dom";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="offer-tag">
          🔥 Summer Sale 2026
        </span>

        <h1>
          Everything You Need,
          <br />
          All In One Place
        </h1>

        <p>
          Discover premium products with exclusive offers,
          fast delivery, secure payments, and amazing discounts.
        </p>

        <Link
          to="/products"
          className="shop-btn"
        >
          Shop Now →
        </Link>

      </div>

    </section>
  );
}