import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>{product.category}</p>

      <h2>₹ {product.price}</h2>

      <div className="button-group">

        <button className="cart-btn">
          Add To Cart
        </button>

        <Link to={`/products/${product.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}