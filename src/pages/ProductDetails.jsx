import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../styles/ProductDetails.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {

  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchProduct = async () => {

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await response.json();

      setProduct(data);

      setLoading(false);

    };


    fetchProduct();

  }, [id]);



  if (loading) {
    return <Loader />
  }



  return (
    <div className="product-details">

      <div className="product-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

      </div>

      <div className="details-info">

        <h1>{product.title}</h1>

        <div className="rating">
          ⭐ {product.rating} / 5
        </div>

        <p>
          <strong>Brand :</strong> {product.brand}
        </p>

        <p>
          <strong>Category :</strong> {product.category}
        </p>

        <p>
          <strong>Stock :</strong>

          <span className={product.stock > 0 ? "in-stock" : "out-stock"}>

            {product.stock > 0
              ? `${product.stock} Available`
              : "Out of Stock"}

          </span>

        </p>

        <p>
          <strong>Discount :</strong> {product.discountPercentage}%
        </p>

        <h2 className="price">

          ₹ {product.price}

        </h2>

        <p className="description">

          {product.description}

        </p>

        <button

          className="cart-btn"

          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: product,
            })
          }

        >

          🛒 Add To Cart

        </button>

      </div>

    </div>

  )

}