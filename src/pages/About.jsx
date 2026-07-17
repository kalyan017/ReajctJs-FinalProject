import "../styles/About.css";
import {
  FaBullseye,
  FaRocket,
  FaHeart,
  FaUsers,
  FaBoxOpen,
  FaStore,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about">

      {/* Hero */}
      <section className="about-hero">

        <h1>About EasyBuy</h1>

        <p>
          Your trusted destination for quality products,
          affordable prices, and a seamless shopping experience.
        </p>

      </section>

      {/* Story */}

      <section className="about-story">

        <h2>Our Story</h2>

        <p>
          EasyBuy was created with one simple goal:
          to make online shopping easy, reliable,
          and enjoyable for everyone.
          We bring together products from multiple
          categories so customers can shop everything
          they need in one place.
        </p>

      </section>

      {/* Mission */}

      <section className="mission-grid">

        <div className="mission-card">

          <FaBullseye />

          <h3>Our Mission</h3>

          <p>
            Deliver quality products at the best prices.
          </p>

        </div>

        <div className="mission-card">

          <FaRocket />

          <h3>Our Vision</h3>

          <p>
            Become India's most trusted online marketplace.
          </p>

        </div>

        <div className="mission-card">

          <FaHeart />

          <h3>Our Values</h3>

          <p>
            Customer satisfaction is always our priority.
          </p>

        </div>

      </section>

      {/* Stats */}

      <section className="stats">

        <div>
          <FaUsers />
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <FaBoxOpen />
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div>
          <FaStore />
          <h2>50+</h2>
          <p>Brands</p>
        </div>

        <div>
          <FaHeadset />
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* Why */}

      <section className="trust">

        <h2>Why Customers Trust Us</h2>

        <div className="trust-list">

          <p><FaCheckCircle /> Secure Payments</p>

          <p><FaCheckCircle /> Fast Delivery</p>

          <p><FaCheckCircle /> Easy Returns</p>

          <p><FaCheckCircle /> Premium Quality Products</p>

        </div>

      </section>

    </div>
  );
}