import "../styles/Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-container">

        <h2>Stay Updated</h2>

        <p>
          Subscribe to get the latest products,
          exclusive discounts, and special offers.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}