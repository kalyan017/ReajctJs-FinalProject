import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../styles/ProductDetails.css";


export default function ProductDetails() {

  const { id } = useParams();

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

      <img
        src={product.thumbnail}
        alt={product.title}
      />


      <div className="details-info">

        <h1>
          {product.title}
        </h1>


        <h2>
          ₹ {product.price}
        </h2>


        <p>
          {product.description}
        </p>


        <p>
          Category: {product.category}
        </p>


        <p>
          Rating ⭐ {product.rating}
        </p>


        <button>
          Add To Cart
        </button>


      </div>

    </div>

  )

}