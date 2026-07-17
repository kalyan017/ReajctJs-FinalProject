import { Link } from "react-router-dom";
import "../styles/CategorySection.css";
import {
  FaLaptop,
  FaTshirt,
  FaCouch,
  FaMobileAlt,
  FaShoppingBasket,
  FaSpa,
} from "react-icons/fa";

const categories = [
  {
    name: "Smartphones",
    icon: <FaMobileAlt />,
    color: "#3b82f6",
  },
  {
    name: "Laptops",
    icon: <FaLaptop />,
    color: "#8b5cf6",
  },
 
  {
    name: "Furniture",
    icon: <FaCouch />,
    color: "#10b981",
  },
  {
    name: "Groceries",
    icon: <FaShoppingBasket />,
    color: "#f59e0b",
  },
  {
    name: "Beauty",
    icon: <FaSpa />,
    color: "#ef4444",
  },
];

export default function CategorySection() {
  return (
    <section className="category-section">

      <h2>Shop by Category</h2>

      <p>
        Find products from your favorite categories.
      </p>

      <div className="category-grid">

        {categories.map((category) => (

          <Link
            key={category.name}
            to={`/products?category=${category.name.toLowerCase()}`}
            className="category-card"
          >

            <div
              className="category-icon"
              style={{ color: category.color }}
            >
              {category.icon}
            </div>

            <h3>{category.name}</h3>

          </Link>

        ))}

      </div>

    </section>
  );
}