import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import "../styles/ProductCard.css";

export default function ProductCard({ product }) {

  const { dispatch } = useContext(CartContext);

  const { dispatch: wishlistDispatch } =
    useContext(WishlistContext);

  return (

    <div className="product-card">

      <div className="product-image">

        <button
          className="wishlist-btn"
          onClick={() => {

            console.log("Clicked wishlist", product);

            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: product,
            });

          }}
        >
          <FaHeart />
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <span className="discount">
          {Math.round(product.discountPercentage)}% OFF
        </span>

      </div>

      <div className="product-info">

        <h3>{product.title}</h3>

        <p className="brand">
          {product.brand}
        </p>

        <div className="rating">

          <FaStar />

          <span>{product.rating}</span>

        </div>

        <h2 className="price">
          ₹ {product.price}
        </h2>

        <div className="button-group">

          <button
            className="cart-btn"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            <FaShoppingCart />
            {" "}Add
          </button>

          <Link to={`/products/${product.id}`}>
            <button className="details-btn">
              Details
            </button>
          </Link>

        </div>

      </div>

    </div>

  );
}